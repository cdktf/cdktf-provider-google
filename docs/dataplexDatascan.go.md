# `dataplexDatascan` Submodule <a name="`dataplexDatascan` Submodule" id="@cdktf/provider-google.dataplexDatascan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataplexDatascan <a name="DataplexDatascan" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan google_dataplex_datascan}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascan(scope Construct, id *string, config DataplexDatascanConfig) DataplexDatascan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig">DataplexDatascanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig">DataplexDatascanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putData">PutData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataDiscoverySpec">PutDataDiscoverySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataProfileSpec">PutDataProfileSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataQualitySpec">PutDataQualitySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putExecutionSpec">PutExecutionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDataDiscoverySpec">ResetDataDiscoverySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDataProfileSpec">ResetDataProfileSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDataQualitySpec">ResetDataQualitySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutData` <a name="PutData" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putData"></a>

```go
func PutData(value DataplexDatascanData)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a>

---

##### `PutDataDiscoverySpec` <a name="PutDataDiscoverySpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataDiscoverySpec"></a>

```go
func PutDataDiscoverySpec(value DataplexDatascanDataDiscoverySpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataDiscoverySpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec">DataplexDatascanDataDiscoverySpec</a>

---

##### `PutDataProfileSpec` <a name="PutDataProfileSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataProfileSpec"></a>

```go
func PutDataProfileSpec(value DataplexDatascanDataProfileSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataProfileSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a>

---

##### `PutDataQualitySpec` <a name="PutDataQualitySpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataQualitySpec"></a>

```go
func PutDataQualitySpec(value DataplexDatascanDataQualitySpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putDataQualitySpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a>

---

##### `PutExecutionSpec` <a name="PutExecutionSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putExecutionSpec"></a>

```go
func PutExecutionSpec(value DataplexDatascanExecutionSpec)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putExecutionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putTimeouts"></a>

```go
func PutTimeouts(value DataplexDatascanTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts">DataplexDatascanTimeouts</a>

---

##### `ResetDataDiscoverySpec` <a name="ResetDataDiscoverySpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDataDiscoverySpec"></a>

```go
func ResetDataDiscoverySpec()
```

##### `ResetDataProfileSpec` <a name="ResetDataProfileSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDataProfileSpec"></a>

```go
func ResetDataProfileSpec()
```

##### `ResetDataQualitySpec` <a name="ResetDataQualitySpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDataQualitySpec"></a>

```go
func ResetDataQualitySpec()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataplexDatascan resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.DataplexDatascan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.DataplexDatascan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.DataplexDatascan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.DataplexDatascan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataplexDatascan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataplexDatascan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataplexDatascan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataplexDatascan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.data">Data</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference">DataplexDatascanDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataDiscoverySpec">DataDiscoverySpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference">DataplexDatascanDataDiscoverySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataProfileSpec">DataProfileSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference">DataplexDatascanDataProfileSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataQualitySpec">DataQualitySpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference">DataplexDatascanDataQualitySpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.executionSpec">ExecutionSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference">DataplexDatascanExecutionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.executionStatus">ExecutionStatus</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList">DataplexDatascanExecutionStatusList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference">DataplexDatascanTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataDiscoverySpecInput">DataDiscoverySpecInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec">DataplexDatascanDataDiscoverySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataInput">DataInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataProfileSpecInput">DataProfileSpecInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataQualitySpecInput">DataQualitySpecInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataScanIdInput">DataScanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.executionSpecInput">ExecutionSpecInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataScanId">DataScanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.data"></a>

```go
func Data() DataplexDatascanDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference">DataplexDatascanDataOutputReference</a>

---

##### `DataDiscoverySpec`<sup>Required</sup> <a name="DataDiscoverySpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataDiscoverySpec"></a>

```go
func DataDiscoverySpec() DataplexDatascanDataDiscoverySpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference">DataplexDatascanDataDiscoverySpecOutputReference</a>

---

##### `DataProfileSpec`<sup>Required</sup> <a name="DataProfileSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataProfileSpec"></a>

```go
func DataProfileSpec() DataplexDatascanDataProfileSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference">DataplexDatascanDataProfileSpecOutputReference</a>

---

##### `DataQualitySpec`<sup>Required</sup> <a name="DataQualitySpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataQualitySpec"></a>

```go
func DataQualitySpec() DataplexDatascanDataQualitySpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference">DataplexDatascanDataQualitySpecOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `ExecutionSpec`<sup>Required</sup> <a name="ExecutionSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.executionSpec"></a>

```go
func ExecutionSpec() DataplexDatascanExecutionSpecOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference">DataplexDatascanExecutionSpecOutputReference</a>

---

##### `ExecutionStatus`<sup>Required</sup> <a name="ExecutionStatus" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.executionStatus"></a>

```go
func ExecutionStatus() DataplexDatascanExecutionStatusList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList">DataplexDatascanExecutionStatusList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.timeouts"></a>

```go
func Timeouts() DataplexDatascanTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference">DataplexDatascanTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `DataDiscoverySpecInput`<sup>Optional</sup> <a name="DataDiscoverySpecInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataDiscoverySpecInput"></a>

```go
func DataDiscoverySpecInput() DataplexDatascanDataDiscoverySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec">DataplexDatascanDataDiscoverySpec</a>

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataInput"></a>

```go
func DataInput() DataplexDatascanData
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a>

---

##### `DataProfileSpecInput`<sup>Optional</sup> <a name="DataProfileSpecInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataProfileSpecInput"></a>

```go
func DataProfileSpecInput() DataplexDatascanDataProfileSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a>

---

##### `DataQualitySpecInput`<sup>Optional</sup> <a name="DataQualitySpecInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataQualitySpecInput"></a>

```go
func DataQualitySpecInput() DataplexDatascanDataQualitySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a>

---

##### `DataScanIdInput`<sup>Optional</sup> <a name="DataScanIdInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataScanIdInput"></a>

```go
func DataScanIdInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ExecutionSpecInput`<sup>Optional</sup> <a name="ExecutionSpecInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.executionSpecInput"></a>

```go
func ExecutionSpecInput() DataplexDatascanExecutionSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataScanId`<sup>Required</sup> <a name="DataScanId" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.dataScanId"></a>

```go
func DataScanId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataplexDatascanConfig <a name="DataplexDatascanConfig" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Data: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanData,
	DataScanId: *string,
	ExecutionSpec: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanExecutionSpec,
	Location: *string,
	DataDiscoverySpec: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataDiscoverySpec,
	DataProfileSpec: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataProfileSpec,
	DataQualitySpec: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataQualitySpec,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.data">Data</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a></code> | data block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataScanId">DataScanId</a></code> | <code>*string</code> | DataScan identifier. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.executionSpec">ExecutionSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a></code> | execution_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.location">Location</a></code> | <code>*string</code> | The location where the data scan should reside. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataDiscoverySpec">DataDiscoverySpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec">DataplexDatascanDataDiscoverySpec</a></code> | data_discovery_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataProfileSpec">DataProfileSpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a></code> | data_profile_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataQualitySpec">DataQualitySpec</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a></code> | data_quality_spec block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.description">Description</a></code> | <code>*string</code> | Description of the scan. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | User friendly display name. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#id DataplexDatascan#id}. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User-defined labels for the scan. A list of key->value pairs. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#project DataplexDatascan#project}. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts">DataplexDatascanTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.data"></a>

```go
Data DataplexDatascanData
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a>

data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#data DataplexDatascan#data}

---

##### `DataScanId`<sup>Required</sup> <a name="DataScanId" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataScanId"></a>

```go
DataScanId *string
```

- *Type:* *string

DataScan identifier.

Must contain only lowercase letters, numbers and hyphens. Must start with a letter. Must end with a number or a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#data_scan_id DataplexDatascan#data_scan_id}

---

##### `ExecutionSpec`<sup>Required</sup> <a name="ExecutionSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.executionSpec"></a>

```go
ExecutionSpec DataplexDatascanExecutionSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a>

execution_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#execution_spec DataplexDatascan#execution_spec}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location where the data scan should reside.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#location DataplexDatascan#location}

---

##### `DataDiscoverySpec`<sup>Optional</sup> <a name="DataDiscoverySpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataDiscoverySpec"></a>

```go
DataDiscoverySpec DataplexDatascanDataDiscoverySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec">DataplexDatascanDataDiscoverySpec</a>

data_discovery_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#data_discovery_spec DataplexDatascan#data_discovery_spec}

---

##### `DataProfileSpec`<sup>Optional</sup> <a name="DataProfileSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataProfileSpec"></a>

```go
DataProfileSpec DataplexDatascanDataProfileSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a>

data_profile_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#data_profile_spec DataplexDatascan#data_profile_spec}

---

##### `DataQualitySpec`<sup>Optional</sup> <a name="DataQualitySpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.dataQualitySpec"></a>

```go
DataQualitySpec DataplexDatascanDataQualitySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a>

data_quality_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#data_quality_spec DataplexDatascan#data_quality_spec}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the scan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#description DataplexDatascan#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

User friendly display name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#display_name DataplexDatascan#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#id DataplexDatascan#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User-defined labels for the scan. A list of key->value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#labels DataplexDatascan#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#project DataplexDatascan#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanConfig.property.timeouts"></a>

```go
Timeouts DataplexDatascanTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts">DataplexDatascanTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#timeouts DataplexDatascan#timeouts}

---

### DataplexDatascanData <a name="DataplexDatascanData" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanData {
	Entity: *string,
	Resource: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData.property.entity">Entity</a></code> | <code>*string</code> | The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData.property.resource">Resource</a></code> | <code>*string</code> | The service-qualified full resource name of the cloud resource for a DataScan job to scan against. |

---

##### `Entity`<sup>Optional</sup> <a name="Entity" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanData.property.entity"></a>

```go
Entity *string
```

- *Type:* *string

The Dataplex entity that represents the data source(e.g. BigQuery table) for Datascan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#entity DataplexDatascan#entity}

---

##### `Resource`<sup>Optional</sup> <a name="Resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanData.property.resource"></a>

```go
Resource *string
```

- *Type:* *string

The service-qualified full resource name of the cloud resource for a DataScan job to scan against.

The field could be:
Cloud Storage bucket (//storage.googleapis.com/projects/PROJECT_ID/buckets/BUCKET_ID) for DataDiscoveryScan OR BigQuery table of type "TABLE" (/bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID) for DataProfileScan/DataQualityScan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#resource DataplexDatascan#resource}

---

### DataplexDatascanDataDiscoverySpec <a name="DataplexDatascanDataDiscoverySpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataDiscoverySpec {
	BigqueryPublishingConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig,
	StorageConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec.property.bigqueryPublishingConfig">BigqueryPublishingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig">DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig</a></code> | bigquery_publishing_config block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec.property.storageConfig">StorageConfig</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig">DataplexDatascanDataDiscoverySpecStorageConfig</a></code> | storage_config block. |

---

##### `BigqueryPublishingConfig`<sup>Optional</sup> <a name="BigqueryPublishingConfig" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec.property.bigqueryPublishingConfig"></a>

```go
BigqueryPublishingConfig DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig">DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig</a>

bigquery_publishing_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#bigquery_publishing_config DataplexDatascan#bigquery_publishing_config}

---

##### `StorageConfig`<sup>Optional</sup> <a name="StorageConfig" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec.property.storageConfig"></a>

```go
StorageConfig DataplexDatascanDataDiscoverySpecStorageConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig">DataplexDatascanDataDiscoverySpecStorageConfig</a>

storage_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#storage_config DataplexDatascan#storage_config}

---

### DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig <a name="DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig {
	Connection: *string,
	Location: *string,
	Project: *string,
	TableType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig.property.connection">Connection</a></code> | <code>*string</code> | The BigQuery connection used to create BigLake tables. Must be in the form 'projects/{projectId}/locations/{locationId}/connections/{connection_id}'. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig.property.location">Location</a></code> | <code>*string</code> | The location of the BigQuery dataset to publish BigLake external or non-BigLake external tables to. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig.property.project">Project</a></code> | <code>*string</code> | The project of the BigQuery dataset to publish BigLake external or non-BigLake external tables to. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig.property.tableType">TableType</a></code> | <code>*string</code> | Determines whether to publish discovered tables as BigLake external tables or non-BigLake external tables. Possible values: ["TABLE_TYPE_UNSPECIFIED", "EXTERNAL", "BIGLAKE"]. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig.property.connection"></a>

```go
Connection *string
```

- *Type:* *string

The BigQuery connection used to create BigLake tables. Must be in the form 'projects/{projectId}/locations/{locationId}/connections/{connection_id}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#connection DataplexDatascan#connection}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the BigQuery dataset to publish BigLake external or non-BigLake external tables to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#location DataplexDatascan#location}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

The project of the BigQuery dataset to publish BigLake external or non-BigLake external tables to.

If not specified, the project of the Cloud Storage bucket will be used. The format is "projects/{project_id_or_number}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#project DataplexDatascan#project}

---

##### `TableType`<sup>Optional</sup> <a name="TableType" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig.property.tableType"></a>

```go
TableType *string
```

- *Type:* *string

Determines whether to publish discovered tables as BigLake external tables or non-BigLake external tables. Possible values: ["TABLE_TYPE_UNSPECIFIED", "EXTERNAL", "BIGLAKE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#table_type DataplexDatascan#table_type}

---

### DataplexDatascanDataDiscoverySpecStorageConfig <a name="DataplexDatascanDataDiscoverySpecStorageConfig" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataDiscoverySpecStorageConfig {
	CsvOptions: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions,
	ExcludePatterns: *[]*string,
	IncludePatterns: *[]*string,
	JsonOptions: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions">DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions</a></code> | csv_options block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig.property.excludePatterns">ExcludePatterns</a></code> | <code>*[]*string</code> | Defines the data to exclude during discovery. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig.property.includePatterns">IncludePatterns</a></code> | <code>*[]*string</code> | Defines the data to include during discovery when only a subset of the data should be considered. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig.property.jsonOptions">JsonOptions</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions">DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions</a></code> | json_options block. |

---

##### `CsvOptions`<sup>Optional</sup> <a name="CsvOptions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig.property.csvOptions"></a>

```go
CsvOptions DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions">DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions</a>

csv_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#csv_options DataplexDatascan#csv_options}

---

##### `ExcludePatterns`<sup>Optional</sup> <a name="ExcludePatterns" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig.property.excludePatterns"></a>

```go
ExcludePatterns *[]*string
```

- *Type:* *[]*string

Defines the data to exclude during discovery.

Provide a list of patterns that identify the data to exclude. For Cloud Storage bucket assets, these patterns are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these patterns are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#exclude_patterns DataplexDatascan#exclude_patterns}

---

##### `IncludePatterns`<sup>Optional</sup> <a name="IncludePatterns" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig.property.includePatterns"></a>

```go
IncludePatterns *[]*string
```

- *Type:* *[]*string

Defines the data to include during discovery when only a subset of the data should be considered.

Provide a list of patterns that identify the data to include. For Cloud Storage bucket assets, these patterns are interpreted as glob patterns used to match object names. For BigQuery dataset assets, these patterns are interpreted as patterns to match table names.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#include_patterns DataplexDatascan#include_patterns}

---

##### `JsonOptions`<sup>Optional</sup> <a name="JsonOptions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig.property.jsonOptions"></a>

```go
JsonOptions DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions">DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions</a>

json_options block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#json_options DataplexDatascan#json_options}

---

### DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions <a name="DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions {
	Delimiter: *string,
	Encoding: *string,
	HeaderRows: *f64,
	Quote: *string,
	TypeInferenceDisabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.delimiter">Delimiter</a></code> | <code>*string</code> | The delimiter that is used to separate values. The default is ',' (comma). |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.encoding">Encoding</a></code> | <code>*string</code> | The character encoding of the data. The default is UTF-8. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.headerRows">HeaderRows</a></code> | <code>*f64</code> | The number of rows to interpret as header rows that should be skipped when reading data rows. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.quote">Quote</a></code> | <code>*string</code> | The character used to quote column values. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.typeInferenceDisabled">TypeInferenceDisabled</a></code> | <code>interface{}</code> | Whether to disable the inference of data types for CSV data. If true, all columns are registered as strings. |

---

##### `Delimiter`<sup>Optional</sup> <a name="Delimiter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.delimiter"></a>

```go
Delimiter *string
```

- *Type:* *string

The delimiter that is used to separate values. The default is ',' (comma).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#delimiter DataplexDatascan#delimiter}

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#encoding DataplexDatascan#encoding}

---

##### `HeaderRows`<sup>Optional</sup> <a name="HeaderRows" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.headerRows"></a>

```go
HeaderRows *f64
```

- *Type:* *f64

The number of rows to interpret as header rows that should be skipped when reading data rows.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#header_rows DataplexDatascan#header_rows}

---

##### `Quote`<sup>Optional</sup> <a name="Quote" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.quote"></a>

```go
Quote *string
```

- *Type:* *string

The character used to quote column values.

Accepts '"' (double quotation mark) or ``` (single quotation mark). If unspecified, defaults to '"' (double quotation mark).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#quote DataplexDatascan#quote}

---

##### `TypeInferenceDisabled`<sup>Optional</sup> <a name="TypeInferenceDisabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions.property.typeInferenceDisabled"></a>

```go
TypeInferenceDisabled interface{}
```

- *Type:* interface{}

Whether to disable the inference of data types for CSV data. If true, all columns are registered as strings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#type_inference_disabled DataplexDatascan#type_inference_disabled}

---

### DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions <a name="DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions {
	Encoding: *string,
	TypeInferenceDisabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions.property.encoding">Encoding</a></code> | <code>*string</code> | The character encoding of the data. The default is UTF-8. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions.property.typeInferenceDisabled">TypeInferenceDisabled</a></code> | <code>interface{}</code> | Whether to disable the inference of data types for JSON data. |

---

##### `Encoding`<sup>Optional</sup> <a name="Encoding" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions.property.encoding"></a>

```go
Encoding *string
```

- *Type:* *string

The character encoding of the data. The default is UTF-8.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#encoding DataplexDatascan#encoding}

---

##### `TypeInferenceDisabled`<sup>Optional</sup> <a name="TypeInferenceDisabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions.property.typeInferenceDisabled"></a>

```go
TypeInferenceDisabled interface{}
```

- *Type:* interface{}

Whether to disable the inference of data types for JSON data.

If true, all columns are registered as their primitive types (strings, number, or boolean).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#type_inference_disabled DataplexDatascan#type_inference_disabled}

---

### DataplexDatascanDataProfileSpec <a name="DataplexDatascanDataProfileSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataProfileSpec {
	ExcludeFields: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields,
	IncludeFields: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields,
	PostScanActions: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions,
	RowFilter: *string,
	SamplingPercent: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.excludeFields">ExcludeFields</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields">DataplexDatascanDataProfileSpecExcludeFields</a></code> | exclude_fields block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.includeFields">IncludeFields</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields">DataplexDatascanDataProfileSpecIncludeFields</a></code> | include_fields block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.postScanActions">PostScanActions</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions">DataplexDatascanDataProfileSpecPostScanActions</a></code> | post_scan_actions block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.rowFilter">RowFilter</a></code> | <code>*string</code> | A filter applied to all rows in a single DataScan job. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.samplingPercent">SamplingPercent</a></code> | <code>*f64</code> | The percentage of the records to be selected from the dataset for DataScan. |

---

##### `ExcludeFields`<sup>Optional</sup> <a name="ExcludeFields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.excludeFields"></a>

```go
ExcludeFields DataplexDatascanDataProfileSpecExcludeFields
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields">DataplexDatascanDataProfileSpecExcludeFields</a>

exclude_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#exclude_fields DataplexDatascan#exclude_fields}

---

##### `IncludeFields`<sup>Optional</sup> <a name="IncludeFields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.includeFields"></a>

```go
IncludeFields DataplexDatascanDataProfileSpecIncludeFields
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields">DataplexDatascanDataProfileSpecIncludeFields</a>

include_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#include_fields DataplexDatascan#include_fields}

---

##### `PostScanActions`<sup>Optional</sup> <a name="PostScanActions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.postScanActions"></a>

```go
PostScanActions DataplexDatascanDataProfileSpecPostScanActions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions">DataplexDatascanDataProfileSpecPostScanActions</a>

post_scan_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#post_scan_actions DataplexDatascan#post_scan_actions}

---

##### `RowFilter`<sup>Optional</sup> <a name="RowFilter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.rowFilter"></a>

```go
RowFilter *string
```

- *Type:* *string

A filter applied to all rows in a single DataScan job.

The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#row_filter DataplexDatascan#row_filter}

---

##### `SamplingPercent`<sup>Optional</sup> <a name="SamplingPercent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec.property.samplingPercent"></a>

```go
SamplingPercent *f64
```

- *Type:* *f64

The percentage of the records to be selected from the dataset for DataScan.

Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
Sampling is not applied if 'sampling_percent' is not specified, 0 or 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#sampling_percent DataplexDatascan#sampling_percent}

---

### DataplexDatascanDataProfileSpecExcludeFields <a name="DataplexDatascanDataProfileSpecExcludeFields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataProfileSpecExcludeFields {
	FieldNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields.property.fieldNames">FieldNames</a></code> | <code>*[]*string</code> | Expected input is a list of fully qualified names of fields as in the schema. |

---

##### `FieldNames`<sup>Optional</sup> <a name="FieldNames" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields.property.fieldNames"></a>

```go
FieldNames *[]*string
```

- *Type:* *[]*string

Expected input is a list of fully qualified names of fields as in the schema.

Only top-level field names for nested fields are supported.
For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#field_names DataplexDatascan#field_names}

---

### DataplexDatascanDataProfileSpecIncludeFields <a name="DataplexDatascanDataProfileSpecIncludeFields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataProfileSpecIncludeFields {
	FieldNames: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields.property.fieldNames">FieldNames</a></code> | <code>*[]*string</code> | Expected input is a list of fully qualified names of fields as in the schema. |

---

##### `FieldNames`<sup>Optional</sup> <a name="FieldNames" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields.property.fieldNames"></a>

```go
FieldNames *[]*string
```

- *Type:* *[]*string

Expected input is a list of fully qualified names of fields as in the schema.

Only top-level field names for nested fields are supported.
For instance, if 'x' is of nested field type, listing 'x' is supported but 'x.y.z' is not supported. Here 'y' and 'y.z' are nested fields of 'x'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#field_names DataplexDatascan#field_names}

---

### DataplexDatascanDataProfileSpecPostScanActions <a name="DataplexDatascanDataProfileSpecPostScanActions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataProfileSpecPostScanActions {
	BigqueryExport: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions.property.bigqueryExport">BigqueryExport</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a></code> | bigquery_export block. |

---

##### `BigqueryExport`<sup>Optional</sup> <a name="BigqueryExport" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions.property.bigqueryExport"></a>

```go
BigqueryExport DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

bigquery_export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#bigquery_export DataplexDatascan#bigquery_export}

---

### DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport <a name="DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport {
	ResultsTable: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport.property.resultsTable">ResultsTable</a></code> | <code>*string</code> | The BigQuery table to export DataProfileScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID. |

---

##### `ResultsTable`<sup>Optional</sup> <a name="ResultsTable" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport.property.resultsTable"></a>

```go
ResultsTable *string
```

- *Type:* *string

The BigQuery table to export DataProfileScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#results_table DataplexDatascan#results_table}

---

### DataplexDatascanDataQualitySpec <a name="DataplexDatascanDataQualitySpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpec {
	CatalogPublishingEnabled: interface{},
	PostScanActions: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions,
	RowFilter: *string,
	Rules: interface{},
	SamplingPercent: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.catalogPublishingEnabled">CatalogPublishingEnabled</a></code> | <code>interface{}</code> | If set, the latest DataScan job result will be published to Dataplex Catalog. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.postScanActions">PostScanActions</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions">DataplexDatascanDataQualitySpecPostScanActions</a></code> | post_scan_actions block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.rowFilter">RowFilter</a></code> | <code>*string</code> | A filter applied to all rows in a single DataScan job. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.samplingPercent">SamplingPercent</a></code> | <code>*f64</code> | The percentage of the records to be selected from the dataset for DataScan. |

---

##### `CatalogPublishingEnabled`<sup>Optional</sup> <a name="CatalogPublishingEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.catalogPublishingEnabled"></a>

```go
CatalogPublishingEnabled interface{}
```

- *Type:* interface{}

If set, the latest DataScan job result will be published to Dataplex Catalog.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#catalog_publishing_enabled DataplexDatascan#catalog_publishing_enabled}

---

##### `PostScanActions`<sup>Optional</sup> <a name="PostScanActions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.postScanActions"></a>

```go
PostScanActions DataplexDatascanDataQualitySpecPostScanActions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions">DataplexDatascanDataQualitySpecPostScanActions</a>

post_scan_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#post_scan_actions DataplexDatascan#post_scan_actions}

---

##### `RowFilter`<sup>Optional</sup> <a name="RowFilter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.rowFilter"></a>

```go
RowFilter *string
```

- *Type:* *string

A filter applied to all rows in a single DataScan job.

The filter needs to be a valid SQL expression for a WHERE clause in BigQuery standard SQL syntax. Example: col1 >= 0 AND col2 < 10

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#row_filter DataplexDatascan#row_filter}

---

##### `Rules`<sup>Optional</sup> <a name="Rules" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#rules DataplexDatascan#rules}

---

##### `SamplingPercent`<sup>Optional</sup> <a name="SamplingPercent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec.property.samplingPercent"></a>

```go
SamplingPercent *f64
```

- *Type:* *f64

The percentage of the records to be selected from the dataset for DataScan.

Value can range between 0.0 and 100.0 with up to 3 significant decimal digits.
Sampling is not applied if 'sampling_percent' is not specified, 0 or 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#sampling_percent DataplexDatascan#sampling_percent}

---

### DataplexDatascanDataQualitySpecPostScanActions <a name="DataplexDatascanDataQualitySpecPostScanActions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecPostScanActions {
	BigqueryExport: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport,
	NotificationReport: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions.property.bigqueryExport">BigqueryExport</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a></code> | bigquery_export block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions.property.notificationReport">NotificationReport</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport">DataplexDatascanDataQualitySpecPostScanActionsNotificationReport</a></code> | notification_report block. |

---

##### `BigqueryExport`<sup>Optional</sup> <a name="BigqueryExport" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions.property.bigqueryExport"></a>

```go
BigqueryExport DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

bigquery_export block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#bigquery_export DataplexDatascan#bigquery_export}

---

##### `NotificationReport`<sup>Optional</sup> <a name="NotificationReport" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions.property.notificationReport"></a>

```go
NotificationReport DataplexDatascanDataQualitySpecPostScanActionsNotificationReport
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport">DataplexDatascanDataQualitySpecPostScanActionsNotificationReport</a>

notification_report block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#notification_report DataplexDatascan#notification_report}

---

### DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport <a name="DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport {
	ResultsTable: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport.property.resultsTable">ResultsTable</a></code> | <code>*string</code> | The BigQuery table to export DataQualityScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID. |

---

##### `ResultsTable`<sup>Optional</sup> <a name="ResultsTable" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport.property.resultsTable"></a>

```go
ResultsTable *string
```

- *Type:* *string

The BigQuery table to export DataQualityScan results to. Format://bigquery.googleapis.com/projects/PROJECT_ID/datasets/DATASET_ID/tables/TABLE_ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#results_table DataplexDatascan#results_table}

---

### DataplexDatascanDataQualitySpecPostScanActionsNotificationReport <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReport" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport {
	Recipients: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients,
	JobEndTrigger: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger,
	JobFailureTrigger: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger,
	ScoreThresholdTrigger: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport.property.recipients">Recipients</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients</a></code> | recipients block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport.property.jobEndTrigger">JobEndTrigger</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger</a></code> | job_end_trigger block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport.property.jobFailureTrigger">JobFailureTrigger</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger</a></code> | job_failure_trigger block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport.property.scoreThresholdTrigger">ScoreThresholdTrigger</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger</a></code> | score_threshold_trigger block. |

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport.property.recipients"></a>

```go
Recipients DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients</a>

recipients block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#recipients DataplexDatascan#recipients}

---

##### `JobEndTrigger`<sup>Optional</sup> <a name="JobEndTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport.property.jobEndTrigger"></a>

```go
JobEndTrigger DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger</a>

job_end_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#job_end_trigger DataplexDatascan#job_end_trigger}

---

##### `JobFailureTrigger`<sup>Optional</sup> <a name="JobFailureTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport.property.jobFailureTrigger"></a>

```go
JobFailureTrigger DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger</a>

job_failure_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#job_failure_trigger DataplexDatascan#job_failure_trigger}

---

##### `ScoreThresholdTrigger`<sup>Optional</sup> <a name="ScoreThresholdTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport.property.scoreThresholdTrigger"></a>

```go
ScoreThresholdTrigger DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger</a>

score_threshold_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#score_threshold_trigger DataplexDatascan#score_threshold_trigger}

---

### DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger {

}
```


### DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger {

}
```


### DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients {
	Emails: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients.property.emails">Emails</a></code> | <code>*[]*string</code> | The email recipients who will receive the DataQualityScan results report. |

---

##### `Emails`<sup>Optional</sup> <a name="Emails" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients.property.emails"></a>

```go
Emails *[]*string
```

- *Type:* *[]*string

The email recipients who will receive the DataQualityScan results report.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#emails DataplexDatascan#emails}

---

### DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger {
	ScoreThreshold: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger.property.scoreThreshold">ScoreThreshold</a></code> | <code>*f64</code> | The score range is in [0,100]. |

---

##### `ScoreThreshold`<sup>Optional</sup> <a name="ScoreThreshold" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger.property.scoreThreshold"></a>

```go
ScoreThreshold *f64
```

- *Type:* *f64

The score range is in [0,100].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#score_threshold DataplexDatascan#score_threshold}

---

### DataplexDatascanDataQualitySpecRules <a name="DataplexDatascanDataQualitySpecRules" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecRules {
	Dimension: *string,
	Column: *string,
	Description: *string,
	IgnoreNull: interface{},
	Name: *string,
	NonNullExpectation: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation,
	RangeExpectation: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation,
	RegexExpectation: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation,
	RowConditionExpectation: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation,
	SetExpectation: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation,
	SqlAssertion: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion,
	StatisticRangeExpectation: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation,
	Suspended: interface{},
	TableConditionExpectation: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation,
	Threshold: *f64,
	UniquenessExpectation: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.dimension">Dimension</a></code> | <code>*string</code> | The dimension name a rule belongs to. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.column">Column</a></code> | <code>*string</code> | The unnested column which this rule is evaluated against. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.description">Description</a></code> | <code>*string</code> | Description of the rule. The maximum length is 1,024 characters. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.ignoreNull">IgnoreNull</a></code> | <code>interface{}</code> | Rows with null values will automatically fail a rule, unless ignoreNull is true. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.name">Name</a></code> | <code>*string</code> | A mutable name for the rule. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.nonNullExpectation">NonNullExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a></code> | non_null_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.rangeExpectation">RangeExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a></code> | range_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.regexExpectation">RegexExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a></code> | regex_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.rowConditionExpectation">RowConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a></code> | row_condition_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.setExpectation">SetExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a></code> | set_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.sqlAssertion">SqlAssertion</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion">DataplexDatascanDataQualitySpecRulesSqlAssertion</a></code> | sql_assertion block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.statisticRangeExpectation">StatisticRangeExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a></code> | statistic_range_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.suspended">Suspended</a></code> | <code>interface{}</code> | Whether the Rule is active or suspended. Default = false. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.tableConditionExpectation">TableConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a></code> | table_condition_expectation block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.threshold">Threshold</a></code> | <code>*f64</code> | The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0). |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.uniquenessExpectation">UniquenessExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a></code> | uniqueness_expectation block. |

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.dimension"></a>

```go
Dimension *string
```

- *Type:* *string

The dimension name a rule belongs to.

Custom dimension name is supported with all uppercase letters and maximum length of 30 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#dimension DataplexDatascan#dimension}

---

##### `Column`<sup>Optional</sup> <a name="Column" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.column"></a>

```go
Column *string
```

- *Type:* *string

The unnested column which this rule is evaluated against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#column DataplexDatascan#column}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the rule. The maximum length is 1,024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#description DataplexDatascan#description}

---

##### `IgnoreNull`<sup>Optional</sup> <a name="IgnoreNull" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.ignoreNull"></a>

```go
IgnoreNull interface{}
```

- *Type:* interface{}

Rows with null values will automatically fail a rule, unless ignoreNull is true.

In that case, such null rows are trivially considered passing. Only applicable to ColumnMap rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#ignore_null DataplexDatascan#ignore_null}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.name"></a>

```go
Name *string
```

- *Type:* *string

A mutable name for the rule.

The name must contain only letters (a-z, A-Z), numbers (0-9), or hyphens (-).
The maximum length is 63 characters.
Must start with a letter.
Must end with a number or a letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#name DataplexDatascan#name}

---

##### `NonNullExpectation`<sup>Optional</sup> <a name="NonNullExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.nonNullExpectation"></a>

```go
NonNullExpectation DataplexDatascanDataQualitySpecRulesNonNullExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

non_null_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#non_null_expectation DataplexDatascan#non_null_expectation}

---

##### `RangeExpectation`<sup>Optional</sup> <a name="RangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.rangeExpectation"></a>

```go
RangeExpectation DataplexDatascanDataQualitySpecRulesRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a>

range_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#range_expectation DataplexDatascan#range_expectation}

---

##### `RegexExpectation`<sup>Optional</sup> <a name="RegexExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.regexExpectation"></a>

```go
RegexExpectation DataplexDatascanDataQualitySpecRulesRegexExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a>

regex_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#regex_expectation DataplexDatascan#regex_expectation}

---

##### `RowConditionExpectation`<sup>Optional</sup> <a name="RowConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.rowConditionExpectation"></a>

```go
RowConditionExpectation DataplexDatascanDataQualitySpecRulesRowConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

row_condition_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#row_condition_expectation DataplexDatascan#row_condition_expectation}

---

##### `SetExpectation`<sup>Optional</sup> <a name="SetExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.setExpectation"></a>

```go
SetExpectation DataplexDatascanDataQualitySpecRulesSetExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a>

set_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#set_expectation DataplexDatascan#set_expectation}

---

##### `SqlAssertion`<sup>Optional</sup> <a name="SqlAssertion" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.sqlAssertion"></a>

```go
SqlAssertion DataplexDatascanDataQualitySpecRulesSqlAssertion
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion">DataplexDatascanDataQualitySpecRulesSqlAssertion</a>

sql_assertion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#sql_assertion DataplexDatascan#sql_assertion}

---

##### `StatisticRangeExpectation`<sup>Optional</sup> <a name="StatisticRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.statisticRangeExpectation"></a>

```go
StatisticRangeExpectation DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

statistic_range_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#statistic_range_expectation DataplexDatascan#statistic_range_expectation}

---

##### `Suspended`<sup>Optional</sup> <a name="Suspended" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.suspended"></a>

```go
Suspended interface{}
```

- *Type:* interface{}

Whether the Rule is active or suspended. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#suspended DataplexDatascan#suspended}

---

##### `TableConditionExpectation`<sup>Optional</sup> <a name="TableConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.tableConditionExpectation"></a>

```go
TableConditionExpectation DataplexDatascanDataQualitySpecRulesTableConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

table_condition_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#table_condition_expectation DataplexDatascan#table_condition_expectation}

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.threshold"></a>

```go
Threshold *f64
```

- *Type:* *f64

The minimum ratio of passing_rows / total_rows required to pass this rule, with a range of [0.0, 1.0]. 0 indicates default value (i.e. 1.0).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#threshold DataplexDatascan#threshold}

---

##### `UniquenessExpectation`<sup>Optional</sup> <a name="UniquenessExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRules.property.uniquenessExpectation"></a>

```go
UniquenessExpectation DataplexDatascanDataQualitySpecRulesUniquenessExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

uniqueness_expectation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#uniqueness_expectation DataplexDatascan#uniqueness_expectation}

---

### DataplexDatascanDataQualitySpecRulesNonNullExpectation <a name="DataplexDatascanDataQualitySpecRulesNonNullExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation {

}
```


### DataplexDatascanDataQualitySpecRulesRangeExpectation <a name="DataplexDatascanDataQualitySpecRulesRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation {
	MaxValue: *string,
	MinValue: *string,
	StrictMaxEnabled: interface{},
	StrictMinEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.maxValue">MaxValue</a></code> | <code>*string</code> | The maximum column value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.minValue">MinValue</a></code> | <code>*string</code> | The minimum column value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMaxEnabled">StrictMaxEnabled</a></code> | <code>interface{}</code> | Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMinEnabled">StrictMinEnabled</a></code> | <code>interface{}</code> | Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed. |

---

##### `MaxValue`<sup>Optional</sup> <a name="MaxValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.maxValue"></a>

```go
MaxValue *string
```

- *Type:* *string

The maximum column value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#max_value DataplexDatascan#max_value}

---

##### `MinValue`<sup>Optional</sup> <a name="MinValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.minValue"></a>

```go
MinValue *string
```

- *Type:* *string

The minimum column value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#min_value DataplexDatascan#min_value}

---

##### `StrictMaxEnabled`<sup>Optional</sup> <a name="StrictMaxEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMaxEnabled"></a>

```go
StrictMaxEnabled interface{}
```

- *Type:* interface{}

Whether each value needs to be strictly lesser than ('<') the maximum, or if equality is allowed.

Only relevant if a maxValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#strict_max_enabled DataplexDatascan#strict_max_enabled}

---

##### `StrictMinEnabled`<sup>Optional</sup> <a name="StrictMinEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation.property.strictMinEnabled"></a>

```go
StrictMinEnabled interface{}
```

- *Type:* interface{}

Whether each value needs to be strictly greater than ('>') the minimum, or if equality is allowed.

Only relevant if a minValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#strict_min_enabled DataplexDatascan#strict_min_enabled}

---

### DataplexDatascanDataQualitySpecRulesRegexExpectation <a name="DataplexDatascanDataQualitySpecRulesRegexExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation {
	Regex: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation.property.regex">Regex</a></code> | <code>*string</code> | A regular expression the column value is expected to match. |

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation.property.regex"></a>

```go
Regex *string
```

- *Type:* *string

A regular expression the column value is expected to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#regex DataplexDatascan#regex}

---

### DataplexDatascanDataQualitySpecRulesRowConditionExpectation <a name="DataplexDatascanDataQualitySpecRulesRowConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation {
	SqlExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | The SQL expression. |

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation.property.sqlExpression"></a>

```go
SqlExpression *string
```

- *Type:* *string

The SQL expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#sql_expression DataplexDatascan#sql_expression}

---

### DataplexDatascanDataQualitySpecRulesSetExpectation <a name="DataplexDatascanDataQualitySpecRulesSetExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecRulesSetExpectation {
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation.property.values">Values</a></code> | <code>*[]*string</code> | Expected values for the column value. |

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Expected values for the column value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#values DataplexDatascan#values}

---

### DataplexDatascanDataQualitySpecRulesSqlAssertion <a name="DataplexDatascanDataQualitySpecRulesSqlAssertion" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion {
	SqlStatement: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion.property.sqlStatement">SqlStatement</a></code> | <code>*string</code> | The SQL statement. |

---

##### `SqlStatement`<sup>Required</sup> <a name="SqlStatement" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion.property.sqlStatement"></a>

```go
SqlStatement *string
```

- *Type:* *string

The SQL statement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#sql_statement DataplexDatascan#sql_statement}

---

### DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation <a name="DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation {
	Statistic: *string,
	MaxValue: *string,
	MinValue: *string,
	StrictMaxEnabled: interface{},
	StrictMinEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.statistic">Statistic</a></code> | <code>*string</code> | column statistics. Possible values: ["STATISTIC_UNDEFINED", "MEAN", "MIN", "MAX"]. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.maxValue">MaxValue</a></code> | <code>*string</code> | The maximum column statistic value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.minValue">MinValue</a></code> | <code>*string</code> | The minimum column statistic value allowed for a row to pass this validation. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMaxEnabled">StrictMaxEnabled</a></code> | <code>interface{}</code> | Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMinEnabled">StrictMinEnabled</a></code> | <code>interface{}</code> | Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed. |

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.statistic"></a>

```go
Statistic *string
```

- *Type:* *string

column statistics. Possible values: ["STATISTIC_UNDEFINED", "MEAN", "MIN", "MAX"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#statistic DataplexDatascan#statistic}

---

##### `MaxValue`<sup>Optional</sup> <a name="MaxValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.maxValue"></a>

```go
MaxValue *string
```

- *Type:* *string

The maximum column statistic value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#max_value DataplexDatascan#max_value}

---

##### `MinValue`<sup>Optional</sup> <a name="MinValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.minValue"></a>

```go
MinValue *string
```

- *Type:* *string

The minimum column statistic value allowed for a row to pass this validation.

At least one of minValue and maxValue need to be provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#min_value DataplexDatascan#min_value}

---

##### `StrictMaxEnabled`<sup>Optional</sup> <a name="StrictMaxEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMaxEnabled"></a>

```go
StrictMaxEnabled interface{}
```

- *Type:* interface{}

Whether column statistic needs to be strictly lesser than ('<') the maximum, or if equality is allowed.

Only relevant if a maxValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#strict_max_enabled DataplexDatascan#strict_max_enabled}

---

##### `StrictMinEnabled`<sup>Optional</sup> <a name="StrictMinEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation.property.strictMinEnabled"></a>

```go
StrictMinEnabled interface{}
```

- *Type:* interface{}

Whether column statistic needs to be strictly greater than ('>') the minimum, or if equality is allowed.

Only relevant if a minValue has been defined. Default = false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#strict_min_enabled DataplexDatascan#strict_min_enabled}

---

### DataplexDatascanDataQualitySpecRulesTableConditionExpectation <a name="DataplexDatascanDataQualitySpecRulesTableConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation {
	SqlExpression: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | The SQL expression. |

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation.property.sqlExpression"></a>

```go
SqlExpression *string
```

- *Type:* *string

The SQL expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#sql_expression DataplexDatascan#sql_expression}

---

### DataplexDatascanDataQualitySpecRulesUniquenessExpectation <a name="DataplexDatascanDataQualitySpecRulesUniquenessExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation {

}
```


### DataplexDatascanExecutionSpec <a name="DataplexDatascanExecutionSpec" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanExecutionSpec {
	Trigger: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanExecutionSpecTrigger,
	Field: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a></code> | trigger block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec.property.field">Field</a></code> | <code>*string</code> | The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time. |

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec.property.trigger"></a>

```go
Trigger DataplexDatascanExecutionSpecTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a>

trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#trigger DataplexDatascan#trigger}

---

##### `Field`<sup>Optional</sup> <a name="Field" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec.property.field"></a>

```go
Field *string
```

- *Type:* *string

The unnested field (of type Date or Timestamp) that contains values which monotonically increase over time.

If not specified, a data scan will run for all data in the table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#field DataplexDatascan#field}

---

### DataplexDatascanExecutionSpecTrigger <a name="DataplexDatascanExecutionSpecTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanExecutionSpecTrigger {
	OnDemand: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand,
	Schedule: github.com/cdktf/cdktf-provider-google-go/google/v16.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger.property.onDemand">OnDemand</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a></code> | on_demand block. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a></code> | schedule block. |

---

##### `OnDemand`<sup>Optional</sup> <a name="OnDemand" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger.property.onDemand"></a>

```go
OnDemand DataplexDatascanExecutionSpecTriggerOnDemand
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a>

on_demand block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#on_demand DataplexDatascan#on_demand}

---

##### `Schedule`<sup>Optional</sup> <a name="Schedule" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger.property.schedule"></a>

```go
Schedule DataplexDatascanExecutionSpecTriggerSchedule
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a>

schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#schedule DataplexDatascan#schedule}

---

### DataplexDatascanExecutionSpecTriggerOnDemand <a name="DataplexDatascanExecutionSpecTriggerOnDemand" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanExecutionSpecTriggerOnDemand {

}
```


### DataplexDatascanExecutionSpecTriggerSchedule <a name="DataplexDatascanExecutionSpecTriggerSchedule" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanExecutionSpecTriggerSchedule {
	Cron: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule.property.cron">Cron</a></code> | <code>*string</code> | Cron schedule for running scans periodically. This field is required for Schedule scans. |

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule.property.cron"></a>

```go
Cron *string
```

- *Type:* *string

Cron schedule for running scans periodically. This field is required for Schedule scans.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#cron DataplexDatascan#cron}

---

### DataplexDatascanExecutionStatus <a name="DataplexDatascanExecutionStatus" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatus"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatus.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanExecutionStatus {

}
```


### DataplexDatascanTimeouts <a name="DataplexDatascanTimeouts" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

&dataplexdatascan.DataplexDatascanTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#create DataplexDatascan#create}. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#delete DataplexDatascan#delete}. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#update DataplexDatascan#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#create DataplexDatascan#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#delete DataplexDatascan#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.45.0/docs/resources/dataplex_datascan#update DataplexDatascan#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference <a name="DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resetConnection">ResetConnection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resetTableType">ResetTableType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnection` <a name="ResetConnection" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resetConnection"></a>

```go
func ResetConnection()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTableType` <a name="ResetTableType" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.resetTableType"></a>

```go
func ResetTableType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.connectionInput">ConnectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.tableTypeInput">TableTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.connection">Connection</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.tableType">TableType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig">DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionInput`<sup>Optional</sup> <a name="ConnectionInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.connectionInput"></a>

```go
func ConnectionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TableTypeInput`<sup>Optional</sup> <a name="TableTypeInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.tableTypeInput"></a>

```go
func TableTypeInput() *string
```

- *Type:* *string

---

##### `Connection`<sup>Required</sup> <a name="Connection" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.connection"></a>

```go
func Connection() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `TableType`<sup>Required</sup> <a name="TableType" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.tableType"></a>

```go
func TableType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig">DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig</a>

---


### DataplexDatascanDataDiscoverySpecOutputReference <a name="DataplexDatascanDataDiscoverySpecOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataDiscoverySpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataDiscoverySpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.putBigqueryPublishingConfig">PutBigqueryPublishingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.putStorageConfig">PutStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.resetBigqueryPublishingConfig">ResetBigqueryPublishingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.resetStorageConfig">ResetStorageConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBigqueryPublishingConfig` <a name="PutBigqueryPublishingConfig" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.putBigqueryPublishingConfig"></a>

```go
func PutBigqueryPublishingConfig(value DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.putBigqueryPublishingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig">DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig</a>

---

##### `PutStorageConfig` <a name="PutStorageConfig" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.putStorageConfig"></a>

```go
func PutStorageConfig(value DataplexDatascanDataDiscoverySpecStorageConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.putStorageConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig">DataplexDatascanDataDiscoverySpecStorageConfig</a>

---

##### `ResetBigqueryPublishingConfig` <a name="ResetBigqueryPublishingConfig" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.resetBigqueryPublishingConfig"></a>

```go
func ResetBigqueryPublishingConfig()
```

##### `ResetStorageConfig` <a name="ResetStorageConfig" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.resetStorageConfig"></a>

```go
func ResetStorageConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.bigqueryPublishingConfig">BigqueryPublishingConfig</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference">DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.storageConfig">StorageConfig</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference">DataplexDatascanDataDiscoverySpecStorageConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.bigqueryPublishingConfigInput">BigqueryPublishingConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig">DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.storageConfigInput">StorageConfigInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig">DataplexDatascanDataDiscoverySpecStorageConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec">DataplexDatascanDataDiscoverySpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BigqueryPublishingConfig`<sup>Required</sup> <a name="BigqueryPublishingConfig" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.bigqueryPublishingConfig"></a>

```go
func BigqueryPublishingConfig() DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference">DataplexDatascanDataDiscoverySpecBigqueryPublishingConfigOutputReference</a>

---

##### `StorageConfig`<sup>Required</sup> <a name="StorageConfig" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.storageConfig"></a>

```go
func StorageConfig() DataplexDatascanDataDiscoverySpecStorageConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference">DataplexDatascanDataDiscoverySpecStorageConfigOutputReference</a>

---

##### `BigqueryPublishingConfigInput`<sup>Optional</sup> <a name="BigqueryPublishingConfigInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.bigqueryPublishingConfigInput"></a>

```go
func BigqueryPublishingConfigInput() DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig">DataplexDatascanDataDiscoverySpecBigqueryPublishingConfig</a>

---

##### `StorageConfigInput`<sup>Optional</sup> <a name="StorageConfigInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.storageConfigInput"></a>

```go
func StorageConfigInput() DataplexDatascanDataDiscoverySpecStorageConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig">DataplexDatascanDataDiscoverySpecStorageConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataDiscoverySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpec">DataplexDatascanDataDiscoverySpec</a>

---


### DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference <a name="DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetDelimiter">ResetDelimiter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetHeaderRows">ResetHeaderRows</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetQuote">ResetQuote</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetTypeInferenceDisabled">ResetTypeInferenceDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDelimiter` <a name="ResetDelimiter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetDelimiter"></a>

```go
func ResetDelimiter()
```

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetHeaderRows` <a name="ResetHeaderRows" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetHeaderRows"></a>

```go
func ResetHeaderRows()
```

##### `ResetQuote` <a name="ResetQuote" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetQuote"></a>

```go
func ResetQuote()
```

##### `ResetTypeInferenceDisabled` <a name="ResetTypeInferenceDisabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.resetTypeInferenceDisabled"></a>

```go
func ResetTypeInferenceDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.delimiterInput">DelimiterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.headerRowsInput">HeaderRowsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.quoteInput">QuoteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.typeInferenceDisabledInput">TypeInferenceDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.delimiter">Delimiter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.headerRows">HeaderRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.quote">Quote</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.typeInferenceDisabled">TypeInferenceDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions">DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DelimiterInput`<sup>Optional</sup> <a name="DelimiterInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.delimiterInput"></a>

```go
func DelimiterInput() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `HeaderRowsInput`<sup>Optional</sup> <a name="HeaderRowsInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.headerRowsInput"></a>

```go
func HeaderRowsInput() *f64
```

- *Type:* *f64

---

##### `QuoteInput`<sup>Optional</sup> <a name="QuoteInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.quoteInput"></a>

```go
func QuoteInput() *string
```

- *Type:* *string

---

##### `TypeInferenceDisabledInput`<sup>Optional</sup> <a name="TypeInferenceDisabledInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.typeInferenceDisabledInput"></a>

```go
func TypeInferenceDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `Delimiter`<sup>Required</sup> <a name="Delimiter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.delimiter"></a>

```go
func Delimiter() *string
```

- *Type:* *string

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `HeaderRows`<sup>Required</sup> <a name="HeaderRows" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.headerRows"></a>

```go
func HeaderRows() *f64
```

- *Type:* *f64

---

##### `Quote`<sup>Required</sup> <a name="Quote" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.quote"></a>

```go
func Quote() *string
```

- *Type:* *string

---

##### `TypeInferenceDisabled`<sup>Required</sup> <a name="TypeInferenceDisabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.typeInferenceDisabled"></a>

```go
func TypeInferenceDisabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions">DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions</a>

---


### DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference <a name="DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.resetEncoding">ResetEncoding</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.resetTypeInferenceDisabled">ResetTypeInferenceDisabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEncoding` <a name="ResetEncoding" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.resetEncoding"></a>

```go
func ResetEncoding()
```

##### `ResetTypeInferenceDisabled` <a name="ResetTypeInferenceDisabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.resetTypeInferenceDisabled"></a>

```go
func ResetTypeInferenceDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.encodingInput">EncodingInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.typeInferenceDisabledInput">TypeInferenceDisabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.encoding">Encoding</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.typeInferenceDisabled">TypeInferenceDisabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions">DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EncodingInput`<sup>Optional</sup> <a name="EncodingInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.encodingInput"></a>

```go
func EncodingInput() *string
```

- *Type:* *string

---

##### `TypeInferenceDisabledInput`<sup>Optional</sup> <a name="TypeInferenceDisabledInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.typeInferenceDisabledInput"></a>

```go
func TypeInferenceDisabledInput() interface{}
```

- *Type:* interface{}

---

##### `Encoding`<sup>Required</sup> <a name="Encoding" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.encoding"></a>

```go
func Encoding() *string
```

- *Type:* *string

---

##### `TypeInferenceDisabled`<sup>Required</sup> <a name="TypeInferenceDisabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.typeInferenceDisabled"></a>

```go
func TypeInferenceDisabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions">DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions</a>

---


### DataplexDatascanDataDiscoverySpecStorageConfigOutputReference <a name="DataplexDatascanDataDiscoverySpecStorageConfigOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataDiscoverySpecStorageConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataDiscoverySpecStorageConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.putCsvOptions">PutCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.putJsonOptions">PutJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resetCsvOptions">ResetCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resetExcludePatterns">ResetExcludePatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resetIncludePatterns">ResetIncludePatterns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resetJsonOptions">ResetJsonOptions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCsvOptions` <a name="PutCsvOptions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.putCsvOptions"></a>

```go
func PutCsvOptions(value DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.putCsvOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions">DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions</a>

---

##### `PutJsonOptions` <a name="PutJsonOptions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.putJsonOptions"></a>

```go
func PutJsonOptions(value DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.putJsonOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions">DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions</a>

---

##### `ResetCsvOptions` <a name="ResetCsvOptions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resetCsvOptions"></a>

```go
func ResetCsvOptions()
```

##### `ResetExcludePatterns` <a name="ResetExcludePatterns" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resetExcludePatterns"></a>

```go
func ResetExcludePatterns()
```

##### `ResetIncludePatterns` <a name="ResetIncludePatterns" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resetIncludePatterns"></a>

```go
func ResetIncludePatterns()
```

##### `ResetJsonOptions` <a name="ResetJsonOptions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.resetJsonOptions"></a>

```go
func ResetJsonOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.csvOptions">CsvOptions</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference">DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.jsonOptions">JsonOptions</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference">DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.csvOptionsInput">CsvOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions">DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.excludePatternsInput">ExcludePatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.includePatternsInput">IncludePatternsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.jsonOptionsInput">JsonOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions">DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.excludePatterns">ExcludePatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.includePatterns">IncludePatterns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig">DataplexDatascanDataDiscoverySpecStorageConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CsvOptions`<sup>Required</sup> <a name="CsvOptions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.csvOptions"></a>

```go
func CsvOptions() DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference">DataplexDatascanDataDiscoverySpecStorageConfigCsvOptionsOutputReference</a>

---

##### `JsonOptions`<sup>Required</sup> <a name="JsonOptions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.jsonOptions"></a>

```go
func JsonOptions() DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference">DataplexDatascanDataDiscoverySpecStorageConfigJsonOptionsOutputReference</a>

---

##### `CsvOptionsInput`<sup>Optional</sup> <a name="CsvOptionsInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.csvOptionsInput"></a>

```go
func CsvOptionsInput() DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions">DataplexDatascanDataDiscoverySpecStorageConfigCsvOptions</a>

---

##### `ExcludePatternsInput`<sup>Optional</sup> <a name="ExcludePatternsInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.excludePatternsInput"></a>

```go
func ExcludePatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludePatternsInput`<sup>Optional</sup> <a name="IncludePatternsInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.includePatternsInput"></a>

```go
func IncludePatternsInput() *[]*string
```

- *Type:* *[]*string

---

##### `JsonOptionsInput`<sup>Optional</sup> <a name="JsonOptionsInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.jsonOptionsInput"></a>

```go
func JsonOptionsInput() DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions">DataplexDatascanDataDiscoverySpecStorageConfigJsonOptions</a>

---

##### `ExcludePatterns`<sup>Required</sup> <a name="ExcludePatterns" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.excludePatterns"></a>

```go
func ExcludePatterns() *[]*string
```

- *Type:* *[]*string

---

##### `IncludePatterns`<sup>Required</sup> <a name="IncludePatterns" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.includePatterns"></a>

```go
func IncludePatterns() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataDiscoverySpecStorageConfig
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataDiscoverySpecStorageConfig">DataplexDatascanDataDiscoverySpecStorageConfig</a>

---


### DataplexDatascanDataOutputReference <a name="DataplexDatascanDataOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resetEntity">ResetEntity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resetResource">ResetResource</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEntity` <a name="ResetEntity" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resetEntity"></a>

```go
func ResetEntity()
```

##### `ResetResource` <a name="ResetResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.resetResource"></a>

```go
func ResetResource()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.entityInput">EntityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.resourceInput">ResourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.entity">Entity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.resource">Resource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EntityInput`<sup>Optional</sup> <a name="EntityInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.entityInput"></a>

```go
func EntityInput() *string
```

- *Type:* *string

---

##### `ResourceInput`<sup>Optional</sup> <a name="ResourceInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.resourceInput"></a>

```go
func ResourceInput() *string
```

- *Type:* *string

---

##### `Entity`<sup>Required</sup> <a name="Entity" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.entity"></a>

```go
func Entity() *string
```

- *Type:* *string

---

##### `Resource`<sup>Required</sup> <a name="Resource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.resource"></a>

```go
func Resource() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanData
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanData">DataplexDatascanData</a>

---


### DataplexDatascanDataProfileSpecExcludeFieldsOutputReference <a name="DataplexDatascanDataProfileSpecExcludeFieldsOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileSpecExcludeFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataProfileSpecExcludeFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resetFieldNames">ResetFieldNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldNames` <a name="ResetFieldNames" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.resetFieldNames"></a>

```go
func ResetFieldNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNamesInput">FieldNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNames">FieldNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields">DataplexDatascanDataProfileSpecExcludeFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldNamesInput`<sup>Optional</sup> <a name="FieldNamesInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNamesInput"></a>

```go
func FieldNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FieldNames`<sup>Required</sup> <a name="FieldNames" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.fieldNames"></a>

```go
func FieldNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataProfileSpecExcludeFields
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields">DataplexDatascanDataProfileSpecExcludeFields</a>

---


### DataplexDatascanDataProfileSpecIncludeFieldsOutputReference <a name="DataplexDatascanDataProfileSpecIncludeFieldsOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileSpecIncludeFieldsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataProfileSpecIncludeFieldsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resetFieldNames">ResetFieldNames</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFieldNames` <a name="ResetFieldNames" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.resetFieldNames"></a>

```go
func ResetFieldNames()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNamesInput">FieldNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNames">FieldNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields">DataplexDatascanDataProfileSpecIncludeFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FieldNamesInput`<sup>Optional</sup> <a name="FieldNamesInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNamesInput"></a>

```go
func FieldNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `FieldNames`<sup>Required</sup> <a name="FieldNames" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.fieldNames"></a>

```go
func FieldNames() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataProfileSpecIncludeFields
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields">DataplexDatascanDataProfileSpecIncludeFields</a>

---


### DataplexDatascanDataProfileSpecOutputReference <a name="DataplexDatascanDataProfileSpecOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataProfileSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.putExcludeFields">PutExcludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.putIncludeFields">PutIncludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.putPostScanActions">PutPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetExcludeFields">ResetExcludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetIncludeFields">ResetIncludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetPostScanActions">ResetPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetRowFilter">ResetRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetSamplingPercent">ResetSamplingPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutExcludeFields` <a name="PutExcludeFields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.putExcludeFields"></a>

```go
func PutExcludeFields(value DataplexDatascanDataProfileSpecExcludeFields)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.putExcludeFields.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields">DataplexDatascanDataProfileSpecExcludeFields</a>

---

##### `PutIncludeFields` <a name="PutIncludeFields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.putIncludeFields"></a>

```go
func PutIncludeFields(value DataplexDatascanDataProfileSpecIncludeFields)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.putIncludeFields.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields">DataplexDatascanDataProfileSpecIncludeFields</a>

---

##### `PutPostScanActions` <a name="PutPostScanActions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.putPostScanActions"></a>

```go
func PutPostScanActions(value DataplexDatascanDataProfileSpecPostScanActions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.putPostScanActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions">DataplexDatascanDataProfileSpecPostScanActions</a>

---

##### `ResetExcludeFields` <a name="ResetExcludeFields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetExcludeFields"></a>

```go
func ResetExcludeFields()
```

##### `ResetIncludeFields` <a name="ResetIncludeFields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetIncludeFields"></a>

```go
func ResetIncludeFields()
```

##### `ResetPostScanActions` <a name="ResetPostScanActions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetPostScanActions"></a>

```go
func ResetPostScanActions()
```

##### `ResetRowFilter` <a name="ResetRowFilter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetRowFilter"></a>

```go
func ResetRowFilter()
```

##### `ResetSamplingPercent` <a name="ResetSamplingPercent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.resetSamplingPercent"></a>

```go
func ResetSamplingPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.excludeFields">ExcludeFields</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference">DataplexDatascanDataProfileSpecExcludeFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.includeFields">IncludeFields</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference">DataplexDatascanDataProfileSpecIncludeFieldsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.postScanActions">PostScanActions</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference">DataplexDatascanDataProfileSpecPostScanActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.excludeFieldsInput">ExcludeFieldsInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields">DataplexDatascanDataProfileSpecExcludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.includeFieldsInput">IncludeFieldsInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields">DataplexDatascanDataProfileSpecIncludeFields</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.postScanActionsInput">PostScanActionsInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions">DataplexDatascanDataProfileSpecPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.rowFilterInput">RowFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.samplingPercentInput">SamplingPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.rowFilter">RowFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.samplingPercent">SamplingPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludeFields`<sup>Required</sup> <a name="ExcludeFields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.excludeFields"></a>

```go
func ExcludeFields() DataplexDatascanDataProfileSpecExcludeFieldsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFieldsOutputReference">DataplexDatascanDataProfileSpecExcludeFieldsOutputReference</a>

---

##### `IncludeFields`<sup>Required</sup> <a name="IncludeFields" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.includeFields"></a>

```go
func IncludeFields() DataplexDatascanDataProfileSpecIncludeFieldsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFieldsOutputReference">DataplexDatascanDataProfileSpecIncludeFieldsOutputReference</a>

---

##### `PostScanActions`<sup>Required</sup> <a name="PostScanActions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.postScanActions"></a>

```go
func PostScanActions() DataplexDatascanDataProfileSpecPostScanActionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference">DataplexDatascanDataProfileSpecPostScanActionsOutputReference</a>

---

##### `ExcludeFieldsInput`<sup>Optional</sup> <a name="ExcludeFieldsInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.excludeFieldsInput"></a>

```go
func ExcludeFieldsInput() DataplexDatascanDataProfileSpecExcludeFields
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecExcludeFields">DataplexDatascanDataProfileSpecExcludeFields</a>

---

##### `IncludeFieldsInput`<sup>Optional</sup> <a name="IncludeFieldsInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.includeFieldsInput"></a>

```go
func IncludeFieldsInput() DataplexDatascanDataProfileSpecIncludeFields
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecIncludeFields">DataplexDatascanDataProfileSpecIncludeFields</a>

---

##### `PostScanActionsInput`<sup>Optional</sup> <a name="PostScanActionsInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.postScanActionsInput"></a>

```go
func PostScanActionsInput() DataplexDatascanDataProfileSpecPostScanActions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions">DataplexDatascanDataProfileSpecPostScanActions</a>

---

##### `RowFilterInput`<sup>Optional</sup> <a name="RowFilterInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.rowFilterInput"></a>

```go
func RowFilterInput() *string
```

- *Type:* *string

---

##### `SamplingPercentInput`<sup>Optional</sup> <a name="SamplingPercentInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.samplingPercentInput"></a>

```go
func SamplingPercentInput() *f64
```

- *Type:* *f64

---

##### `RowFilter`<sup>Required</sup> <a name="RowFilter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.rowFilter"></a>

```go
func RowFilter() *string
```

- *Type:* *string

---

##### `SamplingPercent`<sup>Required</sup> <a name="SamplingPercent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.samplingPercent"></a>

```go
func SamplingPercent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataProfileSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpec">DataplexDatascanDataProfileSpec</a>

---


### DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference <a name="DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resetResultsTable">ResetResultsTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResultsTable` <a name="ResetResultsTable" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.resetResultsTable"></a>

```go
func ResetResultsTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput">ResultsTableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTable">ResultsTable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResultsTableInput`<sup>Optional</sup> <a name="ResultsTableInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput"></a>

```go
func ResultsTableInput() *string
```

- *Type:* *string

---

##### `ResultsTable`<sup>Required</sup> <a name="ResultsTable" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.resultsTable"></a>

```go
func ResultsTable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

---


### DataplexDatascanDataProfileSpecPostScanActionsOutputReference <a name="DataplexDatascanDataProfileSpecPostScanActionsOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataProfileSpecPostScanActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataProfileSpecPostScanActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.putBigqueryExport">PutBigqueryExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.resetBigqueryExport">ResetBigqueryExport</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBigqueryExport` <a name="PutBigqueryExport" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.putBigqueryExport"></a>

```go
func PutBigqueryExport(value DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.putBigqueryExport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

---

##### `ResetBigqueryExport` <a name="ResetBigqueryExport" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.resetBigqueryExport"></a>

```go
func ResetBigqueryExport()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExport">BigqueryExport</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference">DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExportInput">BigqueryExportInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions">DataplexDatascanDataProfileSpecPostScanActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BigqueryExport`<sup>Required</sup> <a name="BigqueryExport" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExport"></a>

```go
func BigqueryExport() DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference">DataplexDatascanDataProfileSpecPostScanActionsBigqueryExportOutputReference</a>

---

##### `BigqueryExportInput`<sup>Optional</sup> <a name="BigqueryExportInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.bigqueryExportInput"></a>

```go
func BigqueryExportInput() DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport">DataplexDatascanDataProfileSpecPostScanActionsBigqueryExport</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataProfileSpecPostScanActions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataProfileSpecPostScanActions">DataplexDatascanDataProfileSpecPostScanActions</a>

---


### DataplexDatascanDataQualitySpecOutputReference <a name="DataplexDatascanDataQualitySpecOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.putPostScanActions">PutPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetCatalogPublishingEnabled">ResetCatalogPublishingEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetPostScanActions">ResetPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetRowFilter">ResetRowFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetRules">ResetRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetSamplingPercent">ResetSamplingPercent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPostScanActions` <a name="PutPostScanActions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.putPostScanActions"></a>

```go
func PutPostScanActions(value DataplexDatascanDataQualitySpecPostScanActions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.putPostScanActions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions">DataplexDatascanDataQualitySpecPostScanActions</a>

---

##### `PutRules` <a name="PutRules" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCatalogPublishingEnabled` <a name="ResetCatalogPublishingEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetCatalogPublishingEnabled"></a>

```go
func ResetCatalogPublishingEnabled()
```

##### `ResetPostScanActions` <a name="ResetPostScanActions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetPostScanActions"></a>

```go
func ResetPostScanActions()
```

##### `ResetRowFilter` <a name="ResetRowFilter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetRowFilter"></a>

```go
func ResetRowFilter()
```

##### `ResetRules` <a name="ResetRules" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetRules"></a>

```go
func ResetRules()
```

##### `ResetSamplingPercent` <a name="ResetSamplingPercent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.resetSamplingPercent"></a>

```go
func ResetSamplingPercent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.postScanActions">PostScanActions</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference">DataplexDatascanDataQualitySpecPostScanActionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rules">Rules</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList">DataplexDatascanDataQualitySpecRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.catalogPublishingEnabledInput">CatalogPublishingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.postScanActionsInput">PostScanActionsInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions">DataplexDatascanDataQualitySpecPostScanActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rowFilterInput">RowFilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.samplingPercentInput">SamplingPercentInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.catalogPublishingEnabled">CatalogPublishingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rowFilter">RowFilter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.samplingPercent">SamplingPercent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PostScanActions`<sup>Required</sup> <a name="PostScanActions" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.postScanActions"></a>

```go
func PostScanActions() DataplexDatascanDataQualitySpecPostScanActionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference">DataplexDatascanDataQualitySpecPostScanActionsOutputReference</a>

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rules"></a>

```go
func Rules() DataplexDatascanDataQualitySpecRulesList
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList">DataplexDatascanDataQualitySpecRulesList</a>

---

##### `CatalogPublishingEnabledInput`<sup>Optional</sup> <a name="CatalogPublishingEnabledInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.catalogPublishingEnabledInput"></a>

```go
func CatalogPublishingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `PostScanActionsInput`<sup>Optional</sup> <a name="PostScanActionsInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.postScanActionsInput"></a>

```go
func PostScanActionsInput() DataplexDatascanDataQualitySpecPostScanActions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions">DataplexDatascanDataQualitySpecPostScanActions</a>

---

##### `RowFilterInput`<sup>Optional</sup> <a name="RowFilterInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rowFilterInput"></a>

```go
func RowFilterInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `SamplingPercentInput`<sup>Optional</sup> <a name="SamplingPercentInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.samplingPercentInput"></a>

```go
func SamplingPercentInput() *f64
```

- *Type:* *f64

---

##### `CatalogPublishingEnabled`<sup>Required</sup> <a name="CatalogPublishingEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.catalogPublishingEnabled"></a>

```go
func CatalogPublishingEnabled() interface{}
```

- *Type:* interface{}

---

##### `RowFilter`<sup>Required</sup> <a name="RowFilter" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.rowFilter"></a>

```go
func RowFilter() *string
```

- *Type:* *string

---

##### `SamplingPercent`<sup>Required</sup> <a name="SamplingPercent" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.samplingPercent"></a>

```go
func SamplingPercent() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpec">DataplexDatascanDataQualitySpec</a>

---


### DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference <a name="DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resetResultsTable">ResetResultsTable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResultsTable` <a name="ResetResultsTable" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.resetResultsTable"></a>

```go
func ResetResultsTable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput">ResultsTableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTable">ResultsTable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResultsTableInput`<sup>Optional</sup> <a name="ResultsTableInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTableInput"></a>

```go
func ResultsTableInput() *string
```

- *Type:* *string

---

##### `ResultsTable`<sup>Required</sup> <a name="ResultsTable" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.resultsTable"></a>

```go
func ResultsTable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

---


### DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger</a>

---


### DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger</a>

---


### DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putJobEndTrigger">PutJobEndTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putJobFailureTrigger">PutJobFailureTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putRecipients">PutRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putScoreThresholdTrigger">PutScoreThresholdTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.resetJobEndTrigger">ResetJobEndTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.resetJobFailureTrigger">ResetJobFailureTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.resetScoreThresholdTrigger">ResetScoreThresholdTrigger</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutJobEndTrigger` <a name="PutJobEndTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putJobEndTrigger"></a>

```go
func PutJobEndTrigger(value DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putJobEndTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger</a>

---

##### `PutJobFailureTrigger` <a name="PutJobFailureTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putJobFailureTrigger"></a>

```go
func PutJobFailureTrigger(value DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putJobFailureTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger</a>

---

##### `PutRecipients` <a name="PutRecipients" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putRecipients"></a>

```go
func PutRecipients(value DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putRecipients.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients</a>

---

##### `PutScoreThresholdTrigger` <a name="PutScoreThresholdTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putScoreThresholdTrigger"></a>

```go
func PutScoreThresholdTrigger(value DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.putScoreThresholdTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger</a>

---

##### `ResetJobEndTrigger` <a name="ResetJobEndTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.resetJobEndTrigger"></a>

```go
func ResetJobEndTrigger()
```

##### `ResetJobFailureTrigger` <a name="ResetJobFailureTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.resetJobFailureTrigger"></a>

```go
func ResetJobFailureTrigger()
```

##### `ResetScoreThresholdTrigger` <a name="ResetScoreThresholdTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.resetScoreThresholdTrigger"></a>

```go
func ResetScoreThresholdTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.jobEndTrigger">JobEndTrigger</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.jobFailureTrigger">JobFailureTrigger</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.recipients">Recipients</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.scoreThresholdTrigger">ScoreThresholdTrigger</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.jobEndTriggerInput">JobEndTriggerInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.jobFailureTriggerInput">JobFailureTriggerInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.recipientsInput">RecipientsInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.scoreThresholdTriggerInput">ScoreThresholdTriggerInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport">DataplexDatascanDataQualitySpecPostScanActionsNotificationReport</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `JobEndTrigger`<sup>Required</sup> <a name="JobEndTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.jobEndTrigger"></a>

```go
func JobEndTrigger() DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTriggerOutputReference</a>

---

##### `JobFailureTrigger`<sup>Required</sup> <a name="JobFailureTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.jobFailureTrigger"></a>

```go
func JobFailureTrigger() DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTriggerOutputReference</a>

---

##### `Recipients`<sup>Required</sup> <a name="Recipients" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.recipients"></a>

```go
func Recipients() DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference</a>

---

##### `ScoreThresholdTrigger`<sup>Required</sup> <a name="ScoreThresholdTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.scoreThresholdTrigger"></a>

```go
func ScoreThresholdTrigger() DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference</a>

---

##### `JobEndTriggerInput`<sup>Optional</sup> <a name="JobEndTriggerInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.jobEndTriggerInput"></a>

```go
func JobEndTriggerInput() DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobEndTrigger</a>

---

##### `JobFailureTriggerInput`<sup>Optional</sup> <a name="JobFailureTriggerInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.jobFailureTriggerInput"></a>

```go
func JobFailureTriggerInput() DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportJobFailureTrigger</a>

---

##### `RecipientsInput`<sup>Optional</sup> <a name="RecipientsInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.recipientsInput"></a>

```go
func RecipientsInput() DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients</a>

---

##### `ScoreThresholdTriggerInput`<sup>Optional</sup> <a name="ScoreThresholdTriggerInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.scoreThresholdTriggerInput"></a>

```go
func ScoreThresholdTriggerInput() DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecPostScanActionsNotificationReport
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport">DataplexDatascanDataQualitySpecPostScanActionsNotificationReport</a>

---


### DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.resetEmails">ResetEmails</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEmails` <a name="ResetEmails" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.resetEmails"></a>

```go
func ResetEmails()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.emailsInput">EmailsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.emails">Emails</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailsInput`<sup>Optional</sup> <a name="EmailsInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.emailsInput"></a>

```go
func EmailsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Emails`<sup>Required</sup> <a name="Emails" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.emails"></a>

```go
func Emails() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipientsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportRecipients</a>

---


### DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference <a name="DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.resetScoreThreshold">ResetScoreThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetScoreThreshold` <a name="ResetScoreThreshold" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.resetScoreThreshold"></a>

```go
func ResetScoreThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.scoreThresholdInput">ScoreThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.scoreThreshold">ScoreThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ScoreThresholdInput`<sup>Optional</sup> <a name="ScoreThresholdInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.scoreThresholdInput"></a>

```go
func ScoreThresholdInput() *f64
```

- *Type:* *f64

---

##### `ScoreThreshold`<sup>Required</sup> <a name="ScoreThreshold" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.scoreThreshold"></a>

```go
func ScoreThreshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportScoreThresholdTrigger</a>

---


### DataplexDatascanDataQualitySpecPostScanActionsOutputReference <a name="DataplexDatascanDataQualitySpecPostScanActionsOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecPostScanActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecPostScanActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.putBigqueryExport">PutBigqueryExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.putNotificationReport">PutNotificationReport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.resetBigqueryExport">ResetBigqueryExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.resetNotificationReport">ResetNotificationReport</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBigqueryExport` <a name="PutBigqueryExport" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.putBigqueryExport"></a>

```go
func PutBigqueryExport(value DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.putBigqueryExport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

---

##### `PutNotificationReport` <a name="PutNotificationReport" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.putNotificationReport"></a>

```go
func PutNotificationReport(value DataplexDatascanDataQualitySpecPostScanActionsNotificationReport)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.putNotificationReport.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport">DataplexDatascanDataQualitySpecPostScanActionsNotificationReport</a>

---

##### `ResetBigqueryExport` <a name="ResetBigqueryExport" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.resetBigqueryExport"></a>

```go
func ResetBigqueryExport()
```

##### `ResetNotificationReport` <a name="ResetNotificationReport" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.resetNotificationReport"></a>

```go
func ResetNotificationReport()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExport">BigqueryExport</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference">DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.notificationReport">NotificationReport</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExportInput">BigqueryExportInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.notificationReportInput">NotificationReportInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport">DataplexDatascanDataQualitySpecPostScanActionsNotificationReport</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions">DataplexDatascanDataQualitySpecPostScanActions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BigqueryExport`<sup>Required</sup> <a name="BigqueryExport" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExport"></a>

```go
func BigqueryExport() DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference">DataplexDatascanDataQualitySpecPostScanActionsBigqueryExportOutputReference</a>

---

##### `NotificationReport`<sup>Required</sup> <a name="NotificationReport" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.notificationReport"></a>

```go
func NotificationReport() DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference">DataplexDatascanDataQualitySpecPostScanActionsNotificationReportOutputReference</a>

---

##### `BigqueryExportInput`<sup>Optional</sup> <a name="BigqueryExportInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.bigqueryExportInput"></a>

```go
func BigqueryExportInput() DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport">DataplexDatascanDataQualitySpecPostScanActionsBigqueryExport</a>

---

##### `NotificationReportInput`<sup>Optional</sup> <a name="NotificationReportInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.notificationReportInput"></a>

```go
func NotificationReportInput() DataplexDatascanDataQualitySpecPostScanActionsNotificationReport
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsNotificationReport">DataplexDatascanDataQualitySpecPostScanActionsNotificationReport</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecPostScanActions
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecPostScanActions">DataplexDatascanDataQualitySpecPostScanActions</a>

---


### DataplexDatascanDataQualitySpecRulesList <a name="DataplexDatascanDataQualitySpecRulesList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanDataQualitySpecRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.get"></a>

```go
func Get(index *f64) DataplexDatascanDataQualitySpecRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecRulesNonNullExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesOutputReference <a name="DataplexDatascanDataQualitySpecRulesOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanDataQualitySpecRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putNonNullExpectation">PutNonNullExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation">PutRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRegexExpectation">PutRegexExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRowConditionExpectation">PutRowConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putSetExpectation">PutSetExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putSqlAssertion">PutSqlAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation">PutStatisticRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putTableConditionExpectation">PutTableConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putUniquenessExpectation">PutUniquenessExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetColumn">ResetColumn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetIgnoreNull">ResetIgnoreNull</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetNonNullExpectation">ResetNonNullExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetRangeExpectation">ResetRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetRegexExpectation">ResetRegexExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetRowConditionExpectation">ResetRowConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetSetExpectation">ResetSetExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetSqlAssertion">ResetSqlAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetStatisticRangeExpectation">ResetStatisticRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetSuspended">ResetSuspended</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetTableConditionExpectation">ResetTableConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetUniquenessExpectation">ResetUniquenessExpectation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNonNullExpectation` <a name="PutNonNullExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putNonNullExpectation"></a>

```go
func PutNonNullExpectation(value DataplexDatascanDataQualitySpecRulesNonNullExpectation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putNonNullExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

---

##### `PutRangeExpectation` <a name="PutRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation"></a>

```go
func PutRangeExpectation(value DataplexDatascanDataQualitySpecRulesRangeExpectation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRangeExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a>

---

##### `PutRegexExpectation` <a name="PutRegexExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRegexExpectation"></a>

```go
func PutRegexExpectation(value DataplexDatascanDataQualitySpecRulesRegexExpectation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRegexExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a>

---

##### `PutRowConditionExpectation` <a name="PutRowConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRowConditionExpectation"></a>

```go
func PutRowConditionExpectation(value DataplexDatascanDataQualitySpecRulesRowConditionExpectation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putRowConditionExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

---

##### `PutSetExpectation` <a name="PutSetExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putSetExpectation"></a>

```go
func PutSetExpectation(value DataplexDatascanDataQualitySpecRulesSetExpectation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putSetExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a>

---

##### `PutSqlAssertion` <a name="PutSqlAssertion" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putSqlAssertion"></a>

```go
func PutSqlAssertion(value DataplexDatascanDataQualitySpecRulesSqlAssertion)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putSqlAssertion.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion">DataplexDatascanDataQualitySpecRulesSqlAssertion</a>

---

##### `PutStatisticRangeExpectation` <a name="PutStatisticRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation"></a>

```go
func PutStatisticRangeExpectation(value DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putStatisticRangeExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

---

##### `PutTableConditionExpectation` <a name="PutTableConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putTableConditionExpectation"></a>

```go
func PutTableConditionExpectation(value DataplexDatascanDataQualitySpecRulesTableConditionExpectation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putTableConditionExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

---

##### `PutUniquenessExpectation` <a name="PutUniquenessExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putUniquenessExpectation"></a>

```go
func PutUniquenessExpectation(value DataplexDatascanDataQualitySpecRulesUniquenessExpectation)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.putUniquenessExpectation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

---

##### `ResetColumn` <a name="ResetColumn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetColumn"></a>

```go
func ResetColumn()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetIgnoreNull` <a name="ResetIgnoreNull" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetIgnoreNull"></a>

```go
func ResetIgnoreNull()
```

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetNonNullExpectation` <a name="ResetNonNullExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetNonNullExpectation"></a>

```go
func ResetNonNullExpectation()
```

##### `ResetRangeExpectation` <a name="ResetRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetRangeExpectation"></a>

```go
func ResetRangeExpectation()
```

##### `ResetRegexExpectation` <a name="ResetRegexExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetRegexExpectation"></a>

```go
func ResetRegexExpectation()
```

##### `ResetRowConditionExpectation` <a name="ResetRowConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetRowConditionExpectation"></a>

```go
func ResetRowConditionExpectation()
```

##### `ResetSetExpectation` <a name="ResetSetExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetSetExpectation"></a>

```go
func ResetSetExpectation()
```

##### `ResetSqlAssertion` <a name="ResetSqlAssertion" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetSqlAssertion"></a>

```go
func ResetSqlAssertion()
```

##### `ResetStatisticRangeExpectation` <a name="ResetStatisticRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetStatisticRangeExpectation"></a>

```go
func ResetStatisticRangeExpectation()
```

##### `ResetSuspended` <a name="ResetSuspended" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetSuspended"></a>

```go
func ResetSuspended()
```

##### `ResetTableConditionExpectation` <a name="ResetTableConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetTableConditionExpectation"></a>

```go
func ResetTableConditionExpectation()
```

##### `ResetThreshold` <a name="ResetThreshold" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```

##### `ResetUniquenessExpectation` <a name="ResetUniquenessExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.resetUniquenessExpectation"></a>

```go
func ResetUniquenessExpectation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectation">NonNullExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference">DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectation">RangeExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference">DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectation">RegexExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference">DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectation">RowConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference">DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectation">SetExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference">DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertion">SqlAssertion</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference">DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectation">StatisticRangeExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectation">TableConditionExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference">DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectation">UniquenessExpectation</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference">DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.columnInput">ColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.dimensionInput">DimensionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNullInput">IgnoreNullInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectationInput">NonNullExpectationInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectationInput">RangeExpectationInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectationInput">RegexExpectationInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectationInput">RowConditionExpectationInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectationInput">SetExpectationInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertionInput">SqlAssertionInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion">DataplexDatascanDataQualitySpecRulesSqlAssertion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectationInput">StatisticRangeExpectationInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.suspendedInput">SuspendedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectationInput">TableConditionExpectationInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectationInput">UniquenessExpectationInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.column">Column</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.dimension">Dimension</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNull">IgnoreNull</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.suspended">Suspended</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.threshold">Threshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NonNullExpectation`<sup>Required</sup> <a name="NonNullExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectation"></a>

```go
func NonNullExpectation() DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference">DataplexDatascanDataQualitySpecRulesNonNullExpectationOutputReference</a>

---

##### `RangeExpectation`<sup>Required</sup> <a name="RangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectation"></a>

```go
func RangeExpectation() DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference">DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference</a>

---

##### `RegexExpectation`<sup>Required</sup> <a name="RegexExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectation"></a>

```go
func RegexExpectation() DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference">DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference</a>

---

##### `RowConditionExpectation`<sup>Required</sup> <a name="RowConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectation"></a>

```go
func RowConditionExpectation() DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference">DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference</a>

---

##### `SetExpectation`<sup>Required</sup> <a name="SetExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectation"></a>

```go
func SetExpectation() DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference">DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference</a>

---

##### `SqlAssertion`<sup>Required</sup> <a name="SqlAssertion" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertion"></a>

```go
func SqlAssertion() DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference">DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference</a>

---

##### `StatisticRangeExpectation`<sup>Required</sup> <a name="StatisticRangeExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectation"></a>

```go
func StatisticRangeExpectation() DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference</a>

---

##### `TableConditionExpectation`<sup>Required</sup> <a name="TableConditionExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectation"></a>

```go
func TableConditionExpectation() DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference">DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference</a>

---

##### `UniquenessExpectation`<sup>Required</sup> <a name="UniquenessExpectation" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectation"></a>

```go
func UniquenessExpectation() DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference">DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference</a>

---

##### `ColumnInput`<sup>Optional</sup> <a name="ColumnInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.columnInput"></a>

```go
func ColumnInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DimensionInput`<sup>Optional</sup> <a name="DimensionInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.dimensionInput"></a>

```go
func DimensionInput() *string
```

- *Type:* *string

---

##### `IgnoreNullInput`<sup>Optional</sup> <a name="IgnoreNullInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNullInput"></a>

```go
func IgnoreNullInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NonNullExpectationInput`<sup>Optional</sup> <a name="NonNullExpectationInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.nonNullExpectationInput"></a>

```go
func NonNullExpectationInput() DataplexDatascanDataQualitySpecRulesNonNullExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesNonNullExpectation">DataplexDatascanDataQualitySpecRulesNonNullExpectation</a>

---

##### `RangeExpectationInput`<sup>Optional</sup> <a name="RangeExpectationInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rangeExpectationInput"></a>

```go
func RangeExpectationInput() DataplexDatascanDataQualitySpecRulesRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a>

---

##### `RegexExpectationInput`<sup>Optional</sup> <a name="RegexExpectationInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.regexExpectationInput"></a>

```go
func RegexExpectationInput() DataplexDatascanDataQualitySpecRulesRegexExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a>

---

##### `RowConditionExpectationInput`<sup>Optional</sup> <a name="RowConditionExpectationInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.rowConditionExpectationInput"></a>

```go
func RowConditionExpectationInput() DataplexDatascanDataQualitySpecRulesRowConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

---

##### `SetExpectationInput`<sup>Optional</sup> <a name="SetExpectationInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.setExpectationInput"></a>

```go
func SetExpectationInput() DataplexDatascanDataQualitySpecRulesSetExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a>

---

##### `SqlAssertionInput`<sup>Optional</sup> <a name="SqlAssertionInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.sqlAssertionInput"></a>

```go
func SqlAssertionInput() DataplexDatascanDataQualitySpecRulesSqlAssertion
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion">DataplexDatascanDataQualitySpecRulesSqlAssertion</a>

---

##### `StatisticRangeExpectationInput`<sup>Optional</sup> <a name="StatisticRangeExpectationInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.statisticRangeExpectationInput"></a>

```go
func StatisticRangeExpectationInput() DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

---

##### `SuspendedInput`<sup>Optional</sup> <a name="SuspendedInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.suspendedInput"></a>

```go
func SuspendedInput() interface{}
```

- *Type:* interface{}

---

##### `TableConditionExpectationInput`<sup>Optional</sup> <a name="TableConditionExpectationInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.tableConditionExpectationInput"></a>

```go
func TableConditionExpectationInput() DataplexDatascanDataQualitySpecRulesTableConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() *f64
```

- *Type:* *f64

---

##### `UniquenessExpectationInput`<sup>Optional</sup> <a name="UniquenessExpectationInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.uniquenessExpectationInput"></a>

```go
func UniquenessExpectationInput() DataplexDatascanDataQualitySpecRulesUniquenessExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

---

##### `Column`<sup>Required</sup> <a name="Column" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.column"></a>

```go
func Column() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Dimension`<sup>Required</sup> <a name="Dimension" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.dimension"></a>

```go
func Dimension() *string
```

- *Type:* *string

---

##### `IgnoreNull`<sup>Required</sup> <a name="IgnoreNull" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.ignoreNull"></a>

```go
func IgnoreNull() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Suspended`<sup>Required</sup> <a name="Suspended" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.suspended"></a>

```go
func Suspended() interface{}
```

- *Type:* interface{}

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.threshold"></a>

```go
func Threshold() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMaxValue">ResetMaxValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMinValue">ResetMinValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMaxEnabled">ResetStrictMaxEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMinEnabled">ResetStrictMinEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxValue` <a name="ResetMaxValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMaxValue"></a>

```go
func ResetMaxValue()
```

##### `ResetMinValue` <a name="ResetMinValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetMinValue"></a>

```go
func ResetMinValue()
```

##### `ResetStrictMaxEnabled` <a name="ResetStrictMaxEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMaxEnabled"></a>

```go
func ResetStrictMaxEnabled()
```

##### `ResetStrictMinEnabled` <a name="ResetStrictMinEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.resetStrictMinEnabled"></a>

```go
func ResetStrictMinEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValueInput">MaxValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValueInput">MinValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabledInput">StrictMaxEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabledInput">StrictMinEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValue">MaxValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValue">MinValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabled">StrictMaxEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabled">StrictMinEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxValueInput`<sup>Optional</sup> <a name="MaxValueInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValueInput"></a>

```go
func MaxValueInput() *string
```

- *Type:* *string

---

##### `MinValueInput`<sup>Optional</sup> <a name="MinValueInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValueInput"></a>

```go
func MinValueInput() *string
```

- *Type:* *string

---

##### `StrictMaxEnabledInput`<sup>Optional</sup> <a name="StrictMaxEnabledInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabledInput"></a>

```go
func StrictMaxEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `StrictMinEnabledInput`<sup>Optional</sup> <a name="StrictMinEnabledInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabledInput"></a>

```go
func StrictMinEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.maxValue"></a>

```go
func MaxValue() *string
```

- *Type:* *string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.minValue"></a>

```go
func MinValue() *string
```

- *Type:* *string

---

##### `StrictMaxEnabled`<sup>Required</sup> <a name="StrictMaxEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMaxEnabled"></a>

```go
func StrictMaxEnabled() interface{}
```

- *Type:* interface{}

---

##### `StrictMinEnabled`<sup>Required</sup> <a name="StrictMinEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.strictMinEnabled"></a>

```go
func StrictMinEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecRulesRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRangeExpectation">DataplexDatascanDataQualitySpecRulesRangeExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regexInput">RegexInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regex">Regex</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regexInput"></a>

```go
func RegexInput() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.regex"></a>

```go
func Regex() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecRulesRegexExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRegexExpectation">DataplexDatascanDataQualitySpecRulesRegexExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpressionInput">SqlExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SqlExpressionInput`<sup>Optional</sup> <a name="SqlExpressionInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpressionInput"></a>

```go
func SqlExpressionInput() *string
```

- *Type:* *string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.sqlExpression"></a>

```go
func SqlExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecRulesRowConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesRowConditionExpectation">DataplexDatascanDataQualitySpecRulesRowConditionExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesSetExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecRulesSetExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSetExpectation">DataplexDatascanDataQualitySpecRulesSetExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference <a name="DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatementInput">SqlStatementInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatement">SqlStatement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion">DataplexDatascanDataQualitySpecRulesSqlAssertion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SqlStatementInput`<sup>Optional</sup> <a name="SqlStatementInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatementInput"></a>

```go
func SqlStatementInput() *string
```

- *Type:* *string

---

##### `SqlStatement`<sup>Required</sup> <a name="SqlStatement" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.sqlStatement"></a>

```go
func SqlStatement() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecRulesSqlAssertion
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesSqlAssertion">DataplexDatascanDataQualitySpecRulesSqlAssertion</a>

---


### DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMaxValue">ResetMaxValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMinValue">ResetMinValue</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMaxEnabled">ResetStrictMaxEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMinEnabled">ResetStrictMinEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxValue` <a name="ResetMaxValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMaxValue"></a>

```go
func ResetMaxValue()
```

##### `ResetMinValue` <a name="ResetMinValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetMinValue"></a>

```go
func ResetMinValue()
```

##### `ResetStrictMaxEnabled` <a name="ResetStrictMaxEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMaxEnabled"></a>

```go
func ResetStrictMaxEnabled()
```

##### `ResetStrictMinEnabled` <a name="ResetStrictMinEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.resetStrictMinEnabled"></a>

```go
func ResetStrictMinEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValueInput">MaxValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValueInput">MinValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statisticInput">StatisticInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabledInput">StrictMaxEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabledInput">StrictMinEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValue">MaxValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValue">MinValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statistic">Statistic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabled">StrictMaxEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabled">StrictMinEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxValueInput`<sup>Optional</sup> <a name="MaxValueInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValueInput"></a>

```go
func MaxValueInput() *string
```

- *Type:* *string

---

##### `MinValueInput`<sup>Optional</sup> <a name="MinValueInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValueInput"></a>

```go
func MinValueInput() *string
```

- *Type:* *string

---

##### `StatisticInput`<sup>Optional</sup> <a name="StatisticInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statisticInput"></a>

```go
func StatisticInput() *string
```

- *Type:* *string

---

##### `StrictMaxEnabledInput`<sup>Optional</sup> <a name="StrictMaxEnabledInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabledInput"></a>

```go
func StrictMaxEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `StrictMinEnabledInput`<sup>Optional</sup> <a name="StrictMinEnabledInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabledInput"></a>

```go
func StrictMinEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.maxValue"></a>

```go
func MaxValue() *string
```

- *Type:* *string

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.minValue"></a>

```go
func MinValue() *string
```

- *Type:* *string

---

##### `Statistic`<sup>Required</sup> <a name="Statistic" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.statistic"></a>

```go
func Statistic() *string
```

- *Type:* *string

---

##### `StrictMaxEnabled`<sup>Required</sup> <a name="StrictMaxEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMaxEnabled"></a>

```go
func StrictMaxEnabled() interface{}
```

- *Type:* interface{}

---

##### `StrictMinEnabled`<sup>Required</sup> <a name="StrictMinEnabled" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.strictMinEnabled"></a>

```go
func StrictMinEnabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation">DataplexDatascanDataQualitySpecRulesStatisticRangeExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpressionInput">SqlExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpression">SqlExpression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SqlExpressionInput`<sup>Optional</sup> <a name="SqlExpressionInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpressionInput"></a>

```go
func SqlExpressionInput() *string
```

- *Type:* *string

---

##### `SqlExpression`<sup>Required</sup> <a name="SqlExpression" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.sqlExpression"></a>

```go
func SqlExpression() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecRulesTableConditionExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesTableConditionExpectation">DataplexDatascanDataQualitySpecRulesTableConditionExpectation</a>

---


### DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference <a name="DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectationOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanDataQualitySpecRulesUniquenessExpectation
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanDataQualitySpecRulesUniquenessExpectation">DataplexDatascanDataQualitySpecRulesUniquenessExpectation</a>

---


### DataplexDatascanExecutionSpecOutputReference <a name="DataplexDatascanExecutionSpecOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanExecutionSpecOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanExecutionSpecOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.putTrigger">PutTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.resetField">ResetField</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTrigger` <a name="PutTrigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.putTrigger"></a>

```go
func PutTrigger(value DataplexDatascanExecutionSpecTrigger)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.putTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a>

---

##### `ResetField` <a name="ResetField" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.resetField"></a>

```go
func ResetField()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.trigger">Trigger</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference">DataplexDatascanExecutionSpecTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.fieldInput">FieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.triggerInput">TriggerInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.field">Field</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Trigger`<sup>Required</sup> <a name="Trigger" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.trigger"></a>

```go
func Trigger() DataplexDatascanExecutionSpecTriggerOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference">DataplexDatascanExecutionSpecTriggerOutputReference</a>

---

##### `FieldInput`<sup>Optional</sup> <a name="FieldInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.fieldInput"></a>

```go
func FieldInput() *string
```

- *Type:* *string

---

##### `TriggerInput`<sup>Optional</sup> <a name="TriggerInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.triggerInput"></a>

```go
func TriggerInput() DataplexDatascanExecutionSpecTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a>

---

##### `Field`<sup>Required</sup> <a name="Field" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.field"></a>

```go
func Field() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanExecutionSpec
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpec">DataplexDatascanExecutionSpec</a>

---


### DataplexDatascanExecutionSpecTriggerOnDemandOutputReference <a name="DataplexDatascanExecutionSpecTriggerOnDemandOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanExecutionSpecTriggerOnDemandOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanExecutionSpecTriggerOnDemandOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanExecutionSpecTriggerOnDemand
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a>

---


### DataplexDatascanExecutionSpecTriggerOutputReference <a name="DataplexDatascanExecutionSpecTriggerOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanExecutionSpecTriggerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanExecutionSpecTriggerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.putOnDemand">PutOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.putSchedule">PutSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resetOnDemand">ResetOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resetSchedule">ResetSchedule</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOnDemand` <a name="PutOnDemand" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.putOnDemand"></a>

```go
func PutOnDemand(value DataplexDatascanExecutionSpecTriggerOnDemand)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.putOnDemand.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a>

---

##### `PutSchedule` <a name="PutSchedule" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.putSchedule"></a>

```go
func PutSchedule(value DataplexDatascanExecutionSpecTriggerSchedule)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a>

---

##### `ResetOnDemand` <a name="ResetOnDemand" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resetOnDemand"></a>

```go
func ResetOnDemand()
```

##### `ResetSchedule` <a name="ResetSchedule" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.resetSchedule"></a>

```go
func ResetSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.onDemand">OnDemand</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference">DataplexDatascanExecutionSpecTriggerOnDemandOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.schedule">Schedule</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference">DataplexDatascanExecutionSpecTriggerScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.onDemandInput">OnDemandInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.scheduleInput">ScheduleInput</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OnDemand`<sup>Required</sup> <a name="OnDemand" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.onDemand"></a>

```go
func OnDemand() DataplexDatascanExecutionSpecTriggerOnDemandOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemandOutputReference">DataplexDatascanExecutionSpecTriggerOnDemandOutputReference</a>

---

##### `Schedule`<sup>Required</sup> <a name="Schedule" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.schedule"></a>

```go
func Schedule() DataplexDatascanExecutionSpecTriggerScheduleOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference">DataplexDatascanExecutionSpecTriggerScheduleOutputReference</a>

---

##### `OnDemandInput`<sup>Optional</sup> <a name="OnDemandInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.onDemandInput"></a>

```go
func OnDemandInput() DataplexDatascanExecutionSpecTriggerOnDemand
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOnDemand">DataplexDatascanExecutionSpecTriggerOnDemand</a>

---

##### `ScheduleInput`<sup>Optional</sup> <a name="ScheduleInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.scheduleInput"></a>

```go
func ScheduleInput() DataplexDatascanExecutionSpecTriggerSchedule
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanExecutionSpecTrigger
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTrigger">DataplexDatascanExecutionSpecTrigger</a>

---


### DataplexDatascanExecutionSpecTriggerScheduleOutputReference <a name="DataplexDatascanExecutionSpecTriggerScheduleOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanExecutionSpecTriggerScheduleOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanExecutionSpecTriggerScheduleOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cronInput">CronInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cron">Cron</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CronInput`<sup>Optional</sup> <a name="CronInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cronInput"></a>

```go
func CronInput() *string
```

- *Type:* *string

---

##### `Cron`<sup>Required</sup> <a name="Cron" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.cron"></a>

```go
func Cron() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerScheduleOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanExecutionSpecTriggerSchedule
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionSpecTriggerSchedule">DataplexDatascanExecutionSpecTriggerSchedule</a>

---


### DataplexDatascanExecutionStatusList <a name="DataplexDatascanExecutionStatusList" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanExecutionStatusList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataplexDatascanExecutionStatusList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.get"></a>

```go
func Get(index *f64) DataplexDatascanExecutionStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataplexDatascanExecutionStatusOutputReference <a name="DataplexDatascanExecutionStatusOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanExecutionStatusOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataplexDatascanExecutionStatusOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.latestJobEndTime">LatestJobEndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.latestJobStartTime">LatestJobStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatus">DataplexDatascanExecutionStatus</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LatestJobEndTime`<sup>Required</sup> <a name="LatestJobEndTime" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.latestJobEndTime"></a>

```go
func LatestJobEndTime() *string
```

- *Type:* *string

---

##### `LatestJobStartTime`<sup>Required</sup> <a name="LatestJobStartTime" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.latestJobStartTime"></a>

```go
func LatestJobStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatusOutputReference.property.internalValue"></a>

```go
func InternalValue() DataplexDatascanExecutionStatus
```

- *Type:* <a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanExecutionStatus">DataplexDatascanExecutionStatus</a>

---


### DataplexDatascanTimeoutsOutputReference <a name="DataplexDatascanTimeoutsOutputReference" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dataplexdatascan"

dataplexdatascan.NewDataplexDatascanTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataplexDatascanTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dataplexDatascan.DataplexDatascanTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



