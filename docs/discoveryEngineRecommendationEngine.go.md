# `discoveryEngineRecommendationEngine` Submodule <a name="`discoveryEngineRecommendationEngine` Submodule" id="@cdktf/provider-google.discoveryEngineRecommendationEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineRecommendationEngine <a name="DiscoveryEngineRecommendationEngine" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine google_discovery_engine_recommendation_engine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

discoveryenginerecommendationengine.NewDiscoveryEngineRecommendationEngine(scope Construct, id *string, config DiscoveryEngineRecommendationEngineConfig) DiscoveryEngineRecommendationEngine
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig">DiscoveryEngineRecommendationEngineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig">DiscoveryEngineRecommendationEngineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putCommonConfig">PutCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putMediaRecommendationEngineConfig">PutMediaRecommendationEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetCommonConfig">ResetCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetIndustryVertical">ResetIndustryVertical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetMediaRecommendationEngineConfig">ResetMediaRecommendationEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCommonConfig` <a name="PutCommonConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putCommonConfig"></a>

```go
func PutCommonConfig(value DiscoveryEngineRecommendationEngineCommonConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putCommonConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a>

---

##### `PutMediaRecommendationEngineConfig` <a name="PutMediaRecommendationEngineConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putMediaRecommendationEngineConfig"></a>

```go
func PutMediaRecommendationEngineConfig(value DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putMediaRecommendationEngineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putTimeouts"></a>

```go
func PutTimeouts(value DiscoveryEngineRecommendationEngineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts">DiscoveryEngineRecommendationEngineTimeouts</a>

---

##### `ResetCommonConfig` <a name="ResetCommonConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetCommonConfig"></a>

```go
func ResetCommonConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetId"></a>

```go
func ResetId()
```

##### `ResetIndustryVertical` <a name="ResetIndustryVertical" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetIndustryVertical"></a>

```go
func ResetIndustryVertical()
```

##### `ResetMediaRecommendationEngineConfig` <a name="ResetMediaRecommendationEngineConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetMediaRecommendationEngineConfig"></a>

```go
func ResetMediaRecommendationEngineConfig()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DiscoveryEngineRecommendationEngine resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

discoveryenginerecommendationengine.DiscoveryEngineRecommendationEngine_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

discoveryenginerecommendationengine.DiscoveryEngineRecommendationEngine_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

discoveryenginerecommendationengine.DiscoveryEngineRecommendationEngine_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

discoveryenginerecommendationengine.DiscoveryEngineRecommendationEngine_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DiscoveryEngineRecommendationEngine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DiscoveryEngineRecommendationEngine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DiscoveryEngineRecommendationEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineRecommendationEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.commonConfig">CommonConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference">DiscoveryEngineRecommendationEngineCommonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfig">MediaRecommendationEngineConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference">DiscoveryEngineRecommendationEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.commonConfigInput">CommonConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.dataStoreIdsInput">DataStoreIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.engineIdInput">EngineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.industryVerticalInput">IndustryVerticalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfigInput">MediaRecommendationEngineConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.dataStoreIds">DataStoreIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.engineId">EngineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.industryVertical">IndustryVertical</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CommonConfig`<sup>Required</sup> <a name="CommonConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.commonConfig"></a>

```go
func CommonConfig() DiscoveryEngineRecommendationEngineCommonConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference">DiscoveryEngineRecommendationEngineCommonConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `MediaRecommendationEngineConfig`<sup>Required</sup> <a name="MediaRecommendationEngineConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfig"></a>

```go
func MediaRecommendationEngineConfig() DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.timeouts"></a>

```go
func Timeouts() DiscoveryEngineRecommendationEngineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference">DiscoveryEngineRecommendationEngineTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CommonConfigInput`<sup>Optional</sup> <a name="CommonConfigInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.commonConfigInput"></a>

```go
func CommonConfigInput() DiscoveryEngineRecommendationEngineCommonConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a>

---

##### `DataStoreIdsInput`<sup>Optional</sup> <a name="DataStoreIdsInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.dataStoreIdsInput"></a>

```go
func DataStoreIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EngineIdInput`<sup>Optional</sup> <a name="EngineIdInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.engineIdInput"></a>

```go
func EngineIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndustryVerticalInput`<sup>Optional</sup> <a name="IndustryVerticalInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.industryVerticalInput"></a>

```go
func IndustryVerticalInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `MediaRecommendationEngineConfigInput`<sup>Optional</sup> <a name="MediaRecommendationEngineConfigInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.mediaRecommendationEngineConfigInput"></a>

```go
func MediaRecommendationEngineConfigInput() DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DataStoreIds`<sup>Required</sup> <a name="DataStoreIds" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.dataStoreIds"></a>

```go
func DataStoreIds() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.engineId"></a>

```go
func EngineId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndustryVertical`<sup>Required</sup> <a name="IndustryVertical" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.industryVertical"></a>

```go
func IndustryVertical() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngine.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineRecommendationEngineCommonConfig <a name="DiscoveryEngineRecommendationEngineCommonConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

&discoveryenginerecommendationengine.DiscoveryEngineRecommendationEngineCommonConfig {
	CompanyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig.property.companyName">CompanyName</a></code> | <code>*string</code> | The name of the company, business or entity that is associated with the engine. |

---

##### `CompanyName`<sup>Optional</sup> <a name="CompanyName" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig.property.companyName"></a>

```go
CompanyName *string
```

- *Type:* *string

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.cd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#company_name DiscoveryEngineRecommendationEngine#company_name}

---

### DiscoveryEngineRecommendationEngineConfig <a name="DiscoveryEngineRecommendationEngineConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

&discoveryenginerecommendationengine.DiscoveryEngineRecommendationEngineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DataStoreIds: *[]*string,
	DisplayName: *string,
	EngineId: *string,
	Location: *string,
	CommonConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig,
	Id: *string,
	IndustryVertical: *string,
	MediaRecommendationEngineConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.dataStoreIds">DataStoreIds</a></code> | <code>*[]*string</code> | The data stores associated with this engine. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.engineId">EngineId</a></code> | <code>*string</code> | Unique ID to use for Recommendation Engine. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.location">Location</a></code> | <code>*string</code> | The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu". |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.commonConfig">CommonConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#id DiscoveryEngineRecommendationEngine#id}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.industryVertical">IndustryVertical</a></code> | <code>*string</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.mediaRecommendationEngineConfig">MediaRecommendationEngineConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a></code> | media_recommendation_engine_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#project DiscoveryEngineRecommendationEngine#project}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts">DiscoveryEngineRecommendationEngineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DataStoreIds`<sup>Required</sup> <a name="DataStoreIds" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.dataStoreIds"></a>

```go
DataStoreIds *[]*string
```

- *Type:* *[]*string

The data stores associated with this engine.

For SOLUTION_TYPE_RECOMMENDATION type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#data_store_ids DiscoveryEngineRecommendationEngine#data_store_ids}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#display_name DiscoveryEngineRecommendationEngine#display_name}

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.engineId"></a>

```go
EngineId *string
```

- *Type:* *string

Unique ID to use for Recommendation Engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#engine_id DiscoveryEngineRecommendationEngine#engine_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The geographic location where the data store should reside. The value can only be one of "global", "us" and "eu".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#location DiscoveryEngineRecommendationEngine#location}

---

##### `CommonConfig`<sup>Optional</sup> <a name="CommonConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.commonConfig"></a>

```go
CommonConfig DiscoveryEngineRecommendationEngineCommonConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#common_config DiscoveryEngineRecommendationEngine#common_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#id DiscoveryEngineRecommendationEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndustryVertical`<sup>Optional</sup> <a name="IndustryVertical" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.industryVertical"></a>

```go
IndustryVertical *string
```

- *Type:* *string

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#industry_vertical DiscoveryEngineRecommendationEngine#industry_vertical}

---

##### `MediaRecommendationEngineConfig`<sup>Optional</sup> <a name="MediaRecommendationEngineConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.mediaRecommendationEngineConfig"></a>

```go
MediaRecommendationEngineConfig DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

media_recommendation_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#media_recommendation_engine_config DiscoveryEngineRecommendationEngine#media_recommendation_engine_config}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#project DiscoveryEngineRecommendationEngine#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineConfig.property.timeouts"></a>

```go
Timeouts DiscoveryEngineRecommendationEngineTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts">DiscoveryEngineRecommendationEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#timeouts DiscoveryEngineRecommendationEngine#timeouts}

---

### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

&discoveryenginerecommendationengine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig {
	EngineFeaturesConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig,
	OptimizationObjective: *string,
	OptimizationObjectiveConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig,
	TrainingState: *string,
	Type: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.engineFeaturesConfig">EngineFeaturesConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a></code> | engine_features_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjective">OptimizationObjective</a></code> | <code>*string</code> | The optimization objective. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjectiveConfig">OptimizationObjectiveConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a></code> | optimization_objective_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.trainingState">TrainingState</a></code> | <code>*string</code> | The training state that the engine is in (e.g. 'TRAINING' or 'PAUSED'). Since part of the cost of running the service is frequency of training - this can be used to determine when to train engine in order to control cost. If not specified: the default value for 'CreateEngine' method is 'TRAINING'. The default value for 'UpdateEngine' method is to keep the state the same as before. Possible values: ["PAUSED", "TRAINING"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.type">Type</a></code> | <code>*string</code> | The type of engine. |

---

##### `EngineFeaturesConfig`<sup>Optional</sup> <a name="EngineFeaturesConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.engineFeaturesConfig"></a>

```go
EngineFeaturesConfig DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

engine_features_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#engine_features_config DiscoveryEngineRecommendationEngine#engine_features_config}

---

##### `OptimizationObjective`<sup>Optional</sup> <a name="OptimizationObjective" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjective"></a>

```go
OptimizationObjective *string
```

- *Type:* *string

The optimization objective.

e.g., 'cvr'.
This field together with MediaRecommendationEngineConfig.type describes
engine metadata to use to control engine training and serving.
Currently supported values: 'ctr', 'cvr'.
If not specified, we choose default based on engine type. Default depends on type of recommendation:
'recommended-for-you' => 'ctr'
'others-you-may-like' => 'ctr'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#optimization_objective DiscoveryEngineRecommendationEngine#optimization_objective}

---

##### `OptimizationObjectiveConfig`<sup>Optional</sup> <a name="OptimizationObjectiveConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.optimizationObjectiveConfig"></a>

```go
OptimizationObjectiveConfig DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

optimization_objective_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#optimization_objective_config DiscoveryEngineRecommendationEngine#optimization_objective_config}

---

##### `TrainingState`<sup>Optional</sup> <a name="TrainingState" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.trainingState"></a>

```go
TrainingState *string
```

- *Type:* *string

The training state that the engine is in (e.g. 'TRAINING' or 'PAUSED'). Since part of the cost of running the service is frequency of training - this can be used to determine when to train engine in order to control cost. If not specified: the default value for 'CreateEngine' method is 'TRAINING'. The default value for 'UpdateEngine' method is to keep the state the same as before. Possible values: ["PAUSED", "TRAINING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#training_state DiscoveryEngineRecommendationEngine#training_state}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of engine.

e.g., 'recommended-for-you'.
This field together with MediaRecommendationEngineConfig.optimizationObjective describes
engine metadata to use to control engine training and serving.
Currently supported values: 'recommended-for-you', 'others-you-may-like',
'more-like-this', 'most-popular-items'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#type DiscoveryEngineRecommendationEngine#type}

---

### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

&discoveryenginerecommendationengine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig {
	MostPopularConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig,
	RecommendedForYouConfig: github.com/cdktf/cdktf-provider-google-go/google/v16.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.mostPopularConfig">MostPopularConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a></code> | most_popular_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.recommendedForYouConfig">RecommendedForYouConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a></code> | recommended_for_you_config block. |

---

##### `MostPopularConfig`<sup>Optional</sup> <a name="MostPopularConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.mostPopularConfig"></a>

```go
MostPopularConfig DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

most_popular_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#most_popular_config DiscoveryEngineRecommendationEngine#most_popular_config}

---

##### `RecommendedForYouConfig`<sup>Optional</sup> <a name="RecommendedForYouConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig.property.recommendedForYouConfig"></a>

```go
RecommendedForYouConfig DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

recommended_for_you_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#recommended_for_you_config DiscoveryEngineRecommendationEngine#recommended_for_you_config}

---

### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

&discoveryenginerecommendationengine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig {
	TimeWindowDays: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig.property.timeWindowDays">TimeWindowDays</a></code> | <code>*f64</code> | The time window of which the engine is queried at training and prediction time. |

---

##### `TimeWindowDays`<sup>Optional</sup> <a name="TimeWindowDays" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig.property.timeWindowDays"></a>

```go
TimeWindowDays *f64
```

- *Type:* *f64

The time window of which the engine is queried at training and prediction time.

Positive integers only. The value translates to the
last X days of events. Currently required for the 'most-popular-items'
engine.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#time_window_days DiscoveryEngineRecommendationEngine#time_window_days}

---

### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

&discoveryenginerecommendationengine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig {
	ContextEventType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig.property.contextEventType">ContextEventType</a></code> | <code>*string</code> | The type of event with which the engine is queried at prediction time. |

---

##### `ContextEventType`<sup>Optional</sup> <a name="ContextEventType" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig.property.contextEventType"></a>

```go
ContextEventType *string
```

- *Type:* *string

The type of event with which the engine is queried at prediction time.

If set to 'generic', only 'view-item', 'media-play',and
'media-complete' will be used as 'context-event' in engine training. If
set to 'view-home-page', 'view-home-page' will also be used as
'context-events' in addition to 'view-item', 'media-play', and
'media-complete'. Currently supported for the 'recommended-for-you'
engine. Currently supported values: 'view-home-page', 'generic'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#context_event_type DiscoveryEngineRecommendationEngine#context_event_type}

---

### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

&discoveryenginerecommendationengine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig {
	TargetField: *string,
	TargetFieldValueFloat: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetField">TargetField</a></code> | <code>*string</code> | The name of the field to target. Currently supported values: 'watch-percentage', 'watch-time'. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetFieldValueFloat">TargetFieldValueFloat</a></code> | <code>*f64</code> | The threshold to be applied to the target (e.g., 0.5). |

---

##### `TargetField`<sup>Optional</sup> <a name="TargetField" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetField"></a>

```go
TargetField *string
```

- *Type:* *string

The name of the field to target. Currently supported values: 'watch-percentage', 'watch-time'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#target_field DiscoveryEngineRecommendationEngine#target_field}

---

##### `TargetFieldValueFloat`<sup>Optional</sup> <a name="TargetFieldValueFloat" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig.property.targetFieldValueFloat"></a>

```go
TargetFieldValueFloat *f64
```

- *Type:* *f64

The threshold to be applied to the target (e.g., 0.5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#target_field_value_float DiscoveryEngineRecommendationEngine#target_field_value_float}

---

### DiscoveryEngineRecommendationEngineTimeouts <a name="DiscoveryEngineRecommendationEngineTimeouts" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

&discoveryenginerecommendationengine.DiscoveryEngineRecommendationEngineTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#create DiscoveryEngineRecommendationEngine#create}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#delete DiscoveryEngineRecommendationEngine#delete}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#update DiscoveryEngineRecommendationEngine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#create DiscoveryEngineRecommendationEngine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#delete DiscoveryEngineRecommendationEngine#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/discovery_engine_recommendation_engine#update DiscoveryEngineRecommendationEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineRecommendationEngineCommonConfigOutputReference <a name="DiscoveryEngineRecommendationEngineCommonConfigOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

discoveryenginerecommendationengine.NewDiscoveryEngineRecommendationEngineCommonConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineRecommendationEngineCommonConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.resetCompanyName">ResetCompanyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompanyName` <a name="ResetCompanyName" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.resetCompanyName"></a>

```go
func ResetCompanyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyNameInput">CompanyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyName">CompanyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompanyNameInput`<sup>Optional</sup> <a name="CompanyNameInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyNameInput"></a>

```go
func CompanyNameInput() *string
```

- *Type:* *string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.companyName"></a>

```go
func CompanyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineRecommendationEngineCommonConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineCommonConfig">DiscoveryEngineRecommendationEngineCommonConfig</a>

---


### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

discoveryenginerecommendationengine.NewDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resetTimeWindowDays">ResetTimeWindowDays</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimeWindowDays` <a name="ResetTimeWindowDays" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.resetTimeWindowDays"></a>

```go
func ResetTimeWindowDays()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDaysInput">TimeWindowDaysInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDays">TimeWindowDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeWindowDaysInput`<sup>Optional</sup> <a name="TimeWindowDaysInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDaysInput"></a>

```go
func TimeWindowDaysInput() *f64
```

- *Type:* *f64

---

##### `TimeWindowDays`<sup>Required</sup> <a name="TimeWindowDays" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.timeWindowDays"></a>

```go
func TimeWindowDays() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

---


### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

discoveryenginerecommendationengine.NewDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putMostPopularConfig">PutMostPopularConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putRecommendedForYouConfig">PutRecommendedForYouConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetMostPopularConfig">ResetMostPopularConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetRecommendedForYouConfig">ResetRecommendedForYouConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMostPopularConfig` <a name="PutMostPopularConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putMostPopularConfig"></a>

```go
func PutMostPopularConfig(value DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putMostPopularConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

---

##### `PutRecommendedForYouConfig` <a name="PutRecommendedForYouConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putRecommendedForYouConfig"></a>

```go
func PutRecommendedForYouConfig(value DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.putRecommendedForYouConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

---

##### `ResetMostPopularConfig` <a name="ResetMostPopularConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetMostPopularConfig"></a>

```go
func ResetMostPopularConfig()
```

##### `ResetRecommendedForYouConfig` <a name="ResetRecommendedForYouConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.resetRecommendedForYouConfig"></a>

```go
func ResetRecommendedForYouConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfig">MostPopularConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfig">RecommendedForYouConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfigInput">MostPopularConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfigInput">RecommendedForYouConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MostPopularConfig`<sup>Required</sup> <a name="MostPopularConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfig"></a>

```go
func MostPopularConfig() DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfigOutputReference</a>

---

##### `RecommendedForYouConfig`<sup>Required</sup> <a name="RecommendedForYouConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfig"></a>

```go
func RecommendedForYouConfig() DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference</a>

---

##### `MostPopularConfigInput`<sup>Optional</sup> <a name="MostPopularConfigInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.mostPopularConfigInput"></a>

```go
func MostPopularConfigInput() DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigMostPopularConfig</a>

---

##### `RecommendedForYouConfigInput`<sup>Optional</sup> <a name="RecommendedForYouConfigInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.recommendedForYouConfigInput"></a>

```go
func RecommendedForYouConfigInput() DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

---


### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

discoveryenginerecommendationengine.NewDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resetContextEventType">ResetContextEventType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContextEventType` <a name="ResetContextEventType" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.resetContextEventType"></a>

```go
func ResetContextEventType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventTypeInput">ContextEventTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventType">ContextEventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContextEventTypeInput`<sup>Optional</sup> <a name="ContextEventTypeInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventTypeInput"></a>

```go
func ContextEventTypeInput() *string
```

- *Type:* *string

---

##### `ContextEventType`<sup>Required</sup> <a name="ContextEventType" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.contextEventType"></a>

```go
func ContextEventType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigRecommendedForYouConfig</a>

---


### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

discoveryenginerecommendationengine.NewDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetField">ResetTargetField</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetFieldValueFloat">ResetTargetFieldValueFloat</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetField` <a name="ResetTargetField" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetField"></a>

```go
func ResetTargetField()
```

##### `ResetTargetFieldValueFloat` <a name="ResetTargetFieldValueFloat" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.resetTargetFieldValueFloat"></a>

```go
func ResetTargetFieldValueFloat()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldInput">TargetFieldInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloatInput">TargetFieldValueFloatInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetField">TargetField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloat">TargetFieldValueFloat</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetFieldInput`<sup>Optional</sup> <a name="TargetFieldInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldInput"></a>

```go
func TargetFieldInput() *string
```

- *Type:* *string

---

##### `TargetFieldValueFloatInput`<sup>Optional</sup> <a name="TargetFieldValueFloatInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloatInput"></a>

```go
func TargetFieldValueFloatInput() *f64
```

- *Type:* *f64

---

##### `TargetField`<sup>Required</sup> <a name="TargetField" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetField"></a>

```go
func TargetField() *string
```

- *Type:* *string

---

##### `TargetFieldValueFloat`<sup>Required</sup> <a name="TargetFieldValueFloat" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.targetFieldValueFloat"></a>

```go
func TargetFieldValueFloat() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

---


### DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference <a name="DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

discoveryenginerecommendationengine.NewDiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putEngineFeaturesConfig">PutEngineFeaturesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putOptimizationObjectiveConfig">PutOptimizationObjectiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetEngineFeaturesConfig">ResetEngineFeaturesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjective">ResetOptimizationObjective</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjectiveConfig">ResetOptimizationObjectiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetTrainingState">ResetTrainingState</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetType">ResetType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEngineFeaturesConfig` <a name="PutEngineFeaturesConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putEngineFeaturesConfig"></a>

```go
func PutEngineFeaturesConfig(value DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putEngineFeaturesConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

---

##### `PutOptimizationObjectiveConfig` <a name="PutOptimizationObjectiveConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putOptimizationObjectiveConfig"></a>

```go
func PutOptimizationObjectiveConfig(value DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.putOptimizationObjectiveConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

---

##### `ResetEngineFeaturesConfig` <a name="ResetEngineFeaturesConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetEngineFeaturesConfig"></a>

```go
func ResetEngineFeaturesConfig()
```

##### `ResetOptimizationObjective` <a name="ResetOptimizationObjective" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjective"></a>

```go
func ResetOptimizationObjective()
```

##### `ResetOptimizationObjectiveConfig` <a name="ResetOptimizationObjectiveConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetOptimizationObjectiveConfig"></a>

```go
func ResetOptimizationObjectiveConfig()
```

##### `ResetTrainingState` <a name="ResetTrainingState" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetTrainingState"></a>

```go
func ResetTrainingState()
```

##### `ResetType` <a name="ResetType" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.resetType"></a>

```go
func ResetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfig">EngineFeaturesConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfig">OptimizationObjectiveConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfigInput">EngineFeaturesConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfigInput">OptimizationObjectiveConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveInput">OptimizationObjectiveInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingStateInput">TrainingStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjective">OptimizationObjective</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingState">TrainingState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EngineFeaturesConfig`<sup>Required</sup> <a name="EngineFeaturesConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfig"></a>

```go
func EngineFeaturesConfig() DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfigOutputReference</a>

---

##### `OptimizationObjectiveConfig`<sup>Required</sup> <a name="OptimizationObjectiveConfig" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfig"></a>

```go
func OptimizationObjectiveConfig() DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfigOutputReference</a>

---

##### `EngineFeaturesConfigInput`<sup>Optional</sup> <a name="EngineFeaturesConfigInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.engineFeaturesConfigInput"></a>

```go
func EngineFeaturesConfigInput() DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigEngineFeaturesConfig</a>

---

##### `OptimizationObjectiveConfigInput`<sup>Optional</sup> <a name="OptimizationObjectiveConfigInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveConfigInput"></a>

```go
func OptimizationObjectiveConfigInput() DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOptimizationObjectiveConfig</a>

---

##### `OptimizationObjectiveInput`<sup>Optional</sup> <a name="OptimizationObjectiveInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjectiveInput"></a>

```go
func OptimizationObjectiveInput() *string
```

- *Type:* *string

---

##### `TrainingStateInput`<sup>Optional</sup> <a name="TrainingStateInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingStateInput"></a>

```go
func TrainingStateInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `OptimizationObjective`<sup>Required</sup> <a name="OptimizationObjective" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.optimizationObjective"></a>

```go
func OptimizationObjective() *string
```

- *Type:* *string

---

##### `TrainingState`<sup>Required</sup> <a name="TrainingState" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.trainingState"></a>

```go
func TrainingState() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig">DiscoveryEngineRecommendationEngineMediaRecommendationEngineConfig</a>

---


### DiscoveryEngineRecommendationEngineTimeoutsOutputReference <a name="DiscoveryEngineRecommendationEngineTimeoutsOutputReference" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/discoveryenginerecommendationengine"

discoveryenginerecommendationengine.NewDiscoveryEngineRecommendationEngineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineRecommendationEngineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineRecommendationEngine.DiscoveryEngineRecommendationEngineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



