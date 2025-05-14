# `vertexAiFeatureOnlineStore` Submodule <a name="`vertexAiFeatureOnlineStore` Submodule" id="@cdktf/provider-google.vertexAiFeatureOnlineStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiFeatureOnlineStore <a name="VertexAiFeatureOnlineStore" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store google_vertex_ai_feature_online_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/vertexaifeatureonlinestore"

vertexaifeatureonlinestore.NewVertexAiFeatureOnlineStore(scope Construct, id *string, config VertexAiFeatureOnlineStoreConfig) VertexAiFeatureOnlineStore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig">VertexAiFeatureOnlineStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig">VertexAiFeatureOnlineStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putBigtable">PutBigtable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putDedicatedServingEndpoint">PutDedicatedServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putOptimized">PutOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetBigtable">ResetBigtable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetDedicatedServingEndpoint">ResetDedicatedServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetOptimized">ResetOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetRegion">ResetRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBigtable` <a name="PutBigtable" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putBigtable"></a>

```go
func PutBigtable(value VertexAiFeatureOnlineStoreBigtable)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putBigtable.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a>

---

##### `PutDedicatedServingEndpoint` <a name="PutDedicatedServingEndpoint" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putDedicatedServingEndpoint"></a>

```go
func PutDedicatedServingEndpoint(value VertexAiFeatureOnlineStoreDedicatedServingEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putDedicatedServingEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

---

##### `PutOptimized` <a name="PutOptimized" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putOptimized"></a>

```go
func PutOptimized(value VertexAiFeatureOnlineStoreOptimized)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putOptimized.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putTimeouts"></a>

```go
func PutTimeouts(value VertexAiFeatureOnlineStoreTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts">VertexAiFeatureOnlineStoreTimeouts</a>

---

##### `ResetBigtable` <a name="ResetBigtable" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetBigtable"></a>

```go
func ResetBigtable()
```

##### `ResetDedicatedServingEndpoint` <a name="ResetDedicatedServingEndpoint" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetDedicatedServingEndpoint"></a>

```go
func ResetDedicatedServingEndpoint()
```

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetOptimized` <a name="ResetOptimized" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetOptimized"></a>

```go
func ResetOptimized()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRegion` <a name="ResetRegion" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetRegion"></a>

```go
func ResetRegion()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VertexAiFeatureOnlineStore resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/vertexaifeatureonlinestore"

vertexaifeatureonlinestore.VertexAiFeatureOnlineStore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/vertexaifeatureonlinestore"

vertexaifeatureonlinestore.VertexAiFeatureOnlineStore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/vertexaifeatureonlinestore"

vertexaifeatureonlinestore.VertexAiFeatureOnlineStore_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/vertexaifeatureonlinestore"

vertexaifeatureonlinestore.VertexAiFeatureOnlineStore_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VertexAiFeatureOnlineStore resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VertexAiFeatureOnlineStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VertexAiFeatureOnlineStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VertexAiFeatureOnlineStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.bigtable">Bigtable</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference">VertexAiFeatureOnlineStoreBigtableOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.dedicatedServingEndpoint">DedicatedServingEndpoint</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference">VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.optimized">Optimized</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference">VertexAiFeatureOnlineStoreOptimizedOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference">VertexAiFeatureOnlineStoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.bigtableInput">BigtableInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.dedicatedServingEndpointInput">DedicatedServingEndpointInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.optimizedInput">OptimizedInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Bigtable`<sup>Required</sup> <a name="Bigtable" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.bigtable"></a>

```go
func Bigtable() VertexAiFeatureOnlineStoreBigtableOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference">VertexAiFeatureOnlineStoreBigtableOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DedicatedServingEndpoint`<sup>Required</sup> <a name="DedicatedServingEndpoint" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.dedicatedServingEndpoint"></a>

```go
func DedicatedServingEndpoint() VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference">VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference</a>

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Optimized`<sup>Required</sup> <a name="Optimized" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.optimized"></a>

```go
func Optimized() VertexAiFeatureOnlineStoreOptimizedOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference">VertexAiFeatureOnlineStoreOptimizedOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.timeouts"></a>

```go
func Timeouts() VertexAiFeatureOnlineStoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference">VertexAiFeatureOnlineStoreTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `BigtableInput`<sup>Optional</sup> <a name="BigtableInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.bigtableInput"></a>

```go
func BigtableInput() VertexAiFeatureOnlineStoreBigtable
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a>

---

##### `DedicatedServingEndpointInput`<sup>Optional</sup> <a name="DedicatedServingEndpointInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.dedicatedServingEndpointInput"></a>

```go
func DedicatedServingEndpointInput() VertexAiFeatureOnlineStoreDedicatedServingEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OptimizedInput`<sup>Optional</sup> <a name="OptimizedInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.optimizedInput"></a>

```go
func OptimizedInput() VertexAiFeatureOnlineStoreOptimized
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiFeatureOnlineStoreBigtable <a name="VertexAiFeatureOnlineStoreBigtable" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/vertexaifeatureonlinestore"

&vertexaifeatureonlinestore.VertexAiFeatureOnlineStoreBigtable {
	AutoScaling: github.com/cdktf/cdktf-provider-google-go/google/v14.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable.property.autoScaling">AutoScaling</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a></code> | auto_scaling block. |

---

##### `AutoScaling`<sup>Required</sup> <a name="AutoScaling" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable.property.autoScaling"></a>

```go
AutoScaling VertexAiFeatureOnlineStoreBigtableAutoScaling
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a>

auto_scaling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#auto_scaling VertexAiFeatureOnlineStore#auto_scaling}

---

### VertexAiFeatureOnlineStoreBigtableAutoScaling <a name="VertexAiFeatureOnlineStoreBigtableAutoScaling" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/vertexaifeatureonlinestore"

&vertexaifeatureonlinestore.VertexAiFeatureOnlineStoreBigtableAutoScaling {
	MaxNodeCount: *f64,
	MinNodeCount: *f64,
	CpuUtilizationTarget: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.property.maxNodeCount">MaxNodeCount</a></code> | <code>*f64</code> | The maximum number of nodes to scale up to. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.property.minNodeCount">MinNodeCount</a></code> | <code>*f64</code> | The minimum number of nodes to scale down to. Must be greater than or equal to 1. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.property.cpuUtilizationTarget">CpuUtilizationTarget</a></code> | <code>*f64</code> | A percentage of the cluster's CPU capacity. |

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.property.maxNodeCount"></a>

```go
MaxNodeCount *f64
```

- *Type:* *f64

The maximum number of nodes to scale up to.

Must be greater than or equal to minNodeCount, and less than or equal to 10 times of 'minNodeCount'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#max_node_count VertexAiFeatureOnlineStore#max_node_count}

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.property.minNodeCount"></a>

```go
MinNodeCount *f64
```

- *Type:* *f64

The minimum number of nodes to scale down to. Must be greater than or equal to 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#min_node_count VertexAiFeatureOnlineStore#min_node_count}

---

##### `CpuUtilizationTarget`<sup>Optional</sup> <a name="CpuUtilizationTarget" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling.property.cpuUtilizationTarget"></a>

```go
CpuUtilizationTarget *f64
```

- *Type:* *f64

A percentage of the cluster's CPU capacity.

Can be from 10% to 80%. When a cluster's CPU utilization exceeds the target that you have set, Bigtable immediately adds nodes to the cluster. When CPU utilization is substantially lower than the target, Bigtable removes nodes. If not set will default to 50%.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#cpu_utilization_target VertexAiFeatureOnlineStore#cpu_utilization_target}

---

### VertexAiFeatureOnlineStoreConfig <a name="VertexAiFeatureOnlineStoreConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/vertexaifeatureonlinestore"

&vertexaifeatureonlinestore.VertexAiFeatureOnlineStoreConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Bigtable: github.com/cdktf/cdktf-provider-google-go/google/v14.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable,
	DedicatedServingEndpoint: github.com/cdktf/cdktf-provider-google-go/google/v14.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint,
	ForceDestroy: interface{},
	Id: *string,
	Labels: *map[string]*string,
	Optimized: github.com/cdktf/cdktf-provider-google-go/google/v14.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized,
	Project: *string,
	Region: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.name">Name</a></code> | <code>*string</code> | The resource name of the Feature Online Store. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.bigtable">Bigtable</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a></code> | bigtable block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.dedicatedServingEndpoint">DedicatedServingEndpoint</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a></code> | dedicated_serving_endpoint block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#id VertexAiFeatureOnlineStore#id}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | The labels with user-defined metadata to organize your feature online stores. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.optimized">Optimized</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a></code> | optimized block. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#project VertexAiFeatureOnlineStore#project}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.region">Region</a></code> | <code>*string</code> | The region of feature online store. eg us-central1. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts">VertexAiFeatureOnlineStoreTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name of the Feature Online Store.

This value may be up to 60 characters, and valid characters are [a-z0-9_]. The first character cannot be a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#name VertexAiFeatureOnlineStore#name}

---

##### `Bigtable`<sup>Optional</sup> <a name="Bigtable" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.bigtable"></a>

```go
Bigtable VertexAiFeatureOnlineStoreBigtable
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a>

bigtable block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#bigtable VertexAiFeatureOnlineStore#bigtable}

---

##### `DedicatedServingEndpoint`<sup>Optional</sup> <a name="DedicatedServingEndpoint" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.dedicatedServingEndpoint"></a>

```go
DedicatedServingEndpoint VertexAiFeatureOnlineStoreDedicatedServingEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

dedicated_serving_endpoint block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#dedicated_serving_endpoint VertexAiFeatureOnlineStore#dedicated_serving_endpoint}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

If set to true, any FeatureViews and Features for this FeatureOnlineStore will also be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#force_destroy VertexAiFeatureOnlineStore#force_destroy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#id VertexAiFeatureOnlineStore#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

The labels with user-defined metadata to organize your feature online stores.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#labels VertexAiFeatureOnlineStore#labels}

---

##### `Optimized`<sup>Optional</sup> <a name="Optimized" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.optimized"></a>

```go
Optimized VertexAiFeatureOnlineStoreOptimized
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a>

optimized block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#optimized VertexAiFeatureOnlineStore#optimized}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#project VertexAiFeatureOnlineStore#project}.

---

##### `Region`<sup>Optional</sup> <a name="Region" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region of feature online store. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#region VertexAiFeatureOnlineStore#region}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreConfig.property.timeouts"></a>

```go
Timeouts VertexAiFeatureOnlineStoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts">VertexAiFeatureOnlineStoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#timeouts VertexAiFeatureOnlineStore#timeouts}

---

### VertexAiFeatureOnlineStoreDedicatedServingEndpoint <a name="VertexAiFeatureOnlineStoreDedicatedServingEndpoint" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/vertexaifeatureonlinestore"

&vertexaifeatureonlinestore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint {
	PrivateServiceConnectConfig: github.com/cdktf/cdktf-provider-google-go/google/v14.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint.property.privateServiceConnectConfig">PrivateServiceConnectConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a></code> | private_service_connect_config block. |

---

##### `PrivateServiceConnectConfig`<sup>Optional</sup> <a name="PrivateServiceConnectConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint.property.privateServiceConnectConfig"></a>

```go
PrivateServiceConnectConfig VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

private_service_connect_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#private_service_connect_config VertexAiFeatureOnlineStore#private_service_connect_config}

---

### VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig <a name="VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/vertexaifeatureonlinestore"

&vertexaifeatureonlinestore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig {
	EnablePrivateServiceConnect: interface{},
	ProjectAllowlist: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect">EnablePrivateServiceConnect</a></code> | <code>interface{}</code> | If set to true, customers will use private service connection to send request. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.projectAllowlist">ProjectAllowlist</a></code> | <code>*[]*string</code> | A list of Projects from which the forwarding rule will target the service attachment. |

---

##### `EnablePrivateServiceConnect`<sup>Required</sup> <a name="EnablePrivateServiceConnect" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.enablePrivateServiceConnect"></a>

```go
EnablePrivateServiceConnect interface{}
```

- *Type:* interface{}

If set to true, customers will use private service connection to send request.

Otherwise, the connection will set to public endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#enable_private_service_connect VertexAiFeatureOnlineStore#enable_private_service_connect}

---

##### `ProjectAllowlist`<sup>Optional</sup> <a name="ProjectAllowlist" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig.property.projectAllowlist"></a>

```go
ProjectAllowlist *[]*string
```

- *Type:* *[]*string

A list of Projects from which the forwarding rule will target the service attachment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#project_allowlist VertexAiFeatureOnlineStore#project_allowlist}

---

### VertexAiFeatureOnlineStoreOptimized <a name="VertexAiFeatureOnlineStoreOptimized" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/vertexaifeatureonlinestore"

&vertexaifeatureonlinestore.VertexAiFeatureOnlineStoreOptimized {

}
```


### VertexAiFeatureOnlineStoreTimeouts <a name="VertexAiFeatureOnlineStoreTimeouts" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/vertexaifeatureonlinestore"

&vertexaifeatureonlinestore.VertexAiFeatureOnlineStoreTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#create VertexAiFeatureOnlineStore#create}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#delete VertexAiFeatureOnlineStore#delete}. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#update VertexAiFeatureOnlineStore#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#create VertexAiFeatureOnlineStore#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#delete VertexAiFeatureOnlineStore#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.35.0/docs/resources/vertex_ai_feature_online_store#update VertexAiFeatureOnlineStore#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference <a name="VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/vertexaifeatureonlinestore"

vertexaifeatureonlinestore.NewVertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resetCpuUtilizationTarget">ResetCpuUtilizationTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuUtilizationTarget` <a name="ResetCpuUtilizationTarget" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.resetCpuUtilizationTarget"></a>

```go
func ResetCpuUtilizationTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTargetInput">CpuUtilizationTargetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCountInput">MaxNodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCountInput">MinNodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTarget">CpuUtilizationTarget</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCount">MinNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CpuUtilizationTargetInput`<sup>Optional</sup> <a name="CpuUtilizationTargetInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTargetInput"></a>

```go
func CpuUtilizationTargetInput() *f64
```

- *Type:* *f64

---

##### `MaxNodeCountInput`<sup>Optional</sup> <a name="MaxNodeCountInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCountInput"></a>

```go
func MaxNodeCountInput() *f64
```

- *Type:* *f64

---

##### `MinNodeCountInput`<sup>Optional</sup> <a name="MinNodeCountInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCountInput"></a>

```go
func MinNodeCountInput() *f64
```

- *Type:* *f64

---

##### `CpuUtilizationTarget`<sup>Required</sup> <a name="CpuUtilizationTarget" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.cpuUtilizationTarget"></a>

```go
func CpuUtilizationTarget() *f64
```

- *Type:* *f64

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.maxNodeCount"></a>

```go
func MaxNodeCount() *f64
```

- *Type:* *f64

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.minNodeCount"></a>

```go
func MinNodeCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiFeatureOnlineStoreBigtableAutoScaling
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a>

---


### VertexAiFeatureOnlineStoreBigtableOutputReference <a name="VertexAiFeatureOnlineStoreBigtableOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/vertexaifeatureonlinestore"

vertexaifeatureonlinestore.NewVertexAiFeatureOnlineStoreBigtableOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiFeatureOnlineStoreBigtableOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.putAutoScaling">PutAutoScaling</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoScaling` <a name="PutAutoScaling" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.putAutoScaling"></a>

```go
func PutAutoScaling(value VertexAiFeatureOnlineStoreBigtableAutoScaling)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.putAutoScaling.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScaling">AutoScaling</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference">VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScalingInput">AutoScalingInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoScaling`<sup>Required</sup> <a name="AutoScaling" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScaling"></a>

```go
func AutoScaling() VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference">VertexAiFeatureOnlineStoreBigtableAutoScalingOutputReference</a>

---

##### `AutoScalingInput`<sup>Optional</sup> <a name="AutoScalingInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.autoScalingInput"></a>

```go
func AutoScalingInput() VertexAiFeatureOnlineStoreBigtableAutoScaling
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableAutoScaling">VertexAiFeatureOnlineStoreBigtableAutoScaling</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtableOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiFeatureOnlineStoreBigtable
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreBigtable">VertexAiFeatureOnlineStoreBigtable</a>

---


### VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference <a name="VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/vertexaifeatureonlinestore"

vertexaifeatureonlinestore.NewVertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.putPrivateServiceConnectConfig">PutPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resetPrivateServiceConnectConfig">ResetPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPrivateServiceConnectConfig` <a name="PutPrivateServiceConnectConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.putPrivateServiceConnectConfig"></a>

```go
func PutPrivateServiceConnectConfig(value VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.putPrivateServiceConnectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

---

##### `ResetPrivateServiceConnectConfig` <a name="ResetPrivateServiceConnectConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.resetPrivateServiceConnectConfig"></a>

```go
func ResetPrivateServiceConnectConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfig">PrivateServiceConnectConfig</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.publicEndpointDomainName">PublicEndpointDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.serviceAttachment">ServiceAttachment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfigInput">PrivateServiceConnectConfigInput</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PrivateServiceConnectConfig`<sup>Required</sup> <a name="PrivateServiceConnectConfig" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfig"></a>

```go
func PrivateServiceConnectConfig() VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference</a>

---

##### `PublicEndpointDomainName`<sup>Required</sup> <a name="PublicEndpointDomainName" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.publicEndpointDomainName"></a>

```go
func PublicEndpointDomainName() *string
```

- *Type:* *string

---

##### `ServiceAttachment`<sup>Required</sup> <a name="ServiceAttachment" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.serviceAttachment"></a>

```go
func ServiceAttachment() *string
```

- *Type:* *string

---

##### `PrivateServiceConnectConfigInput`<sup>Optional</sup> <a name="PrivateServiceConnectConfigInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.privateServiceConnectConfigInput"></a>

```go
func PrivateServiceConnectConfigInput() VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiFeatureOnlineStoreDedicatedServingEndpoint
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpoint">VertexAiFeatureOnlineStoreDedicatedServingEndpoint</a>

---


### VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference <a name="VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/vertexaifeatureonlinestore"

vertexaifeatureonlinestore.NewVertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist">ResetProjectAllowlist</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProjectAllowlist` <a name="ResetProjectAllowlist" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.resetProjectAllowlist"></a>

```go
func ResetProjectAllowlist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput">EnablePrivateServiceConnectInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput">ProjectAllowlistInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect">EnablePrivateServiceConnect</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist">ProjectAllowlist</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnablePrivateServiceConnectInput`<sup>Optional</sup> <a name="EnablePrivateServiceConnectInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnectInput"></a>

```go
func EnablePrivateServiceConnectInput() interface{}
```

- *Type:* interface{}

---

##### `ProjectAllowlistInput`<sup>Optional</sup> <a name="ProjectAllowlistInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlistInput"></a>

```go
func ProjectAllowlistInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnablePrivateServiceConnect`<sup>Required</sup> <a name="EnablePrivateServiceConnect" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.enablePrivateServiceConnect"></a>

```go
func EnablePrivateServiceConnect() interface{}
```

- *Type:* interface{}

---

##### `ProjectAllowlist`<sup>Required</sup> <a name="ProjectAllowlist" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.projectAllowlist"></a>

```go
func ProjectAllowlist() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig">VertexAiFeatureOnlineStoreDedicatedServingEndpointPrivateServiceConnectConfig</a>

---


### VertexAiFeatureOnlineStoreOptimizedOutputReference <a name="VertexAiFeatureOnlineStoreOptimizedOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/vertexaifeatureonlinestore"

vertexaifeatureonlinestore.NewVertexAiFeatureOnlineStoreOptimizedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiFeatureOnlineStoreOptimizedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimizedOutputReference.property.internalValue"></a>

```go
func InternalValue() VertexAiFeatureOnlineStoreOptimized
```

- *Type:* <a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreOptimized">VertexAiFeatureOnlineStoreOptimized</a>

---


### VertexAiFeatureOnlineStoreTimeoutsOutputReference <a name="VertexAiFeatureOnlineStoreTimeoutsOutputReference" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/vertexaifeatureonlinestore"

vertexaifeatureonlinestore.NewVertexAiFeatureOnlineStoreTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VertexAiFeatureOnlineStoreTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vertexAiFeatureOnlineStore.VertexAiFeatureOnlineStoreTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



