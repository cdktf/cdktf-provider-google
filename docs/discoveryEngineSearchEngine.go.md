# `discoveryEngineSearchEngine` Submodule <a name="`discoveryEngineSearchEngine` Submodule" id="@cdktf/provider-google.discoveryEngineSearchEngine"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DiscoveryEngineSearchEngine <a name="DiscoveryEngineSearchEngine" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine google_discovery_engine_search_engine}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/discoveryenginesearchengine"

discoveryenginesearchengine.NewDiscoveryEngineSearchEngine(scope Construct, id *string, config DiscoveryEngineSearchEngineConfig) DiscoveryEngineSearchEngine
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig">DiscoveryEngineSearchEngineConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig">DiscoveryEngineSearchEngineConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putCommonConfig">PutCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putSearchEngineConfig">PutSearchEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetCommonConfig">ResetCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetIndustryVertical">ResetIndustryVertical</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCommonConfig` <a name="PutCommonConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putCommonConfig"></a>

```go
func PutCommonConfig(value DiscoveryEngineSearchEngineCommonConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putCommonConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a>

---

##### `PutSearchEngineConfig` <a name="PutSearchEngineConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putSearchEngineConfig"></a>

```go
func PutSearchEngineConfig(value DiscoveryEngineSearchEngineSearchEngineConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putSearchEngineConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putTimeouts"></a>

```go
func PutTimeouts(value DiscoveryEngineSearchEngineTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a>

---

##### `ResetCommonConfig` <a name="ResetCommonConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetCommonConfig"></a>

```go
func ResetCommonConfig()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetId"></a>

```go
func ResetId()
```

##### `ResetIndustryVertical` <a name="ResetIndustryVertical" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetIndustryVertical"></a>

```go
func ResetIndustryVertical()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DiscoveryEngineSearchEngine resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/discoveryenginesearchengine"

discoveryenginesearchengine.DiscoveryEngineSearchEngine_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/discoveryenginesearchengine"

discoveryenginesearchengine.DiscoveryEngineSearchEngine_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/discoveryenginesearchengine"

discoveryenginesearchengine.DiscoveryEngineSearchEngine_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/discoveryenginesearchengine"

discoveryenginesearchengine.DiscoveryEngineSearchEngine_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DiscoveryEngineSearchEngine resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DiscoveryEngineSearchEngine to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DiscoveryEngineSearchEngine that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DiscoveryEngineSearchEngine to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.commonConfig">CommonConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference">DiscoveryEngineSearchEngineCommonConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.searchEngineConfig">SearchEngineConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference">DiscoveryEngineSearchEngineSearchEngineConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference">DiscoveryEngineSearchEngineTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.collectionIdInput">CollectionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.commonConfigInput">CommonConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dataStoreIdsInput">DataStoreIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.engineIdInput">EngineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.industryVerticalInput">IndustryVerticalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.searchEngineConfigInput">SearchEngineConfigInput</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.collectionId">CollectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dataStoreIds">DataStoreIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.engineId">EngineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.industryVertical">IndustryVertical</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CommonConfig`<sup>Required</sup> <a name="CommonConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.commonConfig"></a>

```go
func CommonConfig() DiscoveryEngineSearchEngineCommonConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference">DiscoveryEngineSearchEngineCommonConfigOutputReference</a>

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SearchEngineConfig`<sup>Required</sup> <a name="SearchEngineConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.searchEngineConfig"></a>

```go
func SearchEngineConfig() DiscoveryEngineSearchEngineSearchEngineConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference">DiscoveryEngineSearchEngineSearchEngineConfigOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.timeouts"></a>

```go
func Timeouts() DiscoveryEngineSearchEngineTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference">DiscoveryEngineSearchEngineTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CollectionIdInput`<sup>Optional</sup> <a name="CollectionIdInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.collectionIdInput"></a>

```go
func CollectionIdInput() *string
```

- *Type:* *string

---

##### `CommonConfigInput`<sup>Optional</sup> <a name="CommonConfigInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.commonConfigInput"></a>

```go
func CommonConfigInput() DiscoveryEngineSearchEngineCommonConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a>

---

##### `DataStoreIdsInput`<sup>Optional</sup> <a name="DataStoreIdsInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dataStoreIdsInput"></a>

```go
func DataStoreIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EngineIdInput`<sup>Optional</sup> <a name="EngineIdInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.engineIdInput"></a>

```go
func EngineIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IndustryVerticalInput`<sup>Optional</sup> <a name="IndustryVerticalInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.industryVerticalInput"></a>

```go
func IndustryVerticalInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `SearchEngineConfigInput`<sup>Optional</sup> <a name="SearchEngineConfigInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.searchEngineConfigInput"></a>

```go
func SearchEngineConfigInput() DiscoveryEngineSearchEngineSearchEngineConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.collectionId"></a>

```go
func CollectionId() *string
```

- *Type:* *string

---

##### `DataStoreIds`<sup>Required</sup> <a name="DataStoreIds" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.dataStoreIds"></a>

```go
func DataStoreIds() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.engineId"></a>

```go
func EngineId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndustryVertical`<sup>Required</sup> <a name="IndustryVertical" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.industryVertical"></a>

```go
func IndustryVertical() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngine.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DiscoveryEngineSearchEngineCommonConfig <a name="DiscoveryEngineSearchEngineCommonConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/discoveryenginesearchengine"

&discoveryenginesearchengine.DiscoveryEngineSearchEngineCommonConfig {
	CompanyName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig.property.companyName">CompanyName</a></code> | <code>*string</code> | The name of the company, business or entity that is associated with the engine. |

---

##### `CompanyName`<sup>Optional</sup> <a name="CompanyName" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig.property.companyName"></a>

```go
CompanyName *string
```

- *Type:* *string

The name of the company, business or entity that is associated with the engine.

Setting this may help improve LLM related features.cd

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#company_name DiscoveryEngineSearchEngine#company_name}

---

### DiscoveryEngineSearchEngineConfig <a name="DiscoveryEngineSearchEngineConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/discoveryenginesearchengine"

&discoveryenginesearchengine.DiscoveryEngineSearchEngineConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CollectionId: *string,
	DataStoreIds: *[]*string,
	DisplayName: *string,
	EngineId: *string,
	Location: *string,
	SearchEngineConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig,
	CommonConfig: github.com/cdktf/cdktf-provider-google-go/google/v13.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig,
	Id: *string,
	IndustryVertical: *string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v13.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.collectionId">CollectionId</a></code> | <code>*string</code> | The collection ID. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.dataStoreIds">DataStoreIds</a></code> | <code>*[]*string</code> | The data stores associated with this engine. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.engineId">EngineId</a></code> | <code>*string</code> | Unique ID to use for Search Engine App. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.location">Location</a></code> | <code>*string</code> | Location. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.searchEngineConfig">SearchEngineConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a></code> | search_engine_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.commonConfig">CommonConfig</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a></code> | common_config block. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#id DiscoveryEngineSearchEngine#id}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.industryVertical">IndustryVertical</a></code> | <code>*string</code> | The industry vertical that the engine registers. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#project DiscoveryEngineSearchEngine#project}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CollectionId`<sup>Required</sup> <a name="CollectionId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.collectionId"></a>

```go
CollectionId *string
```

- *Type:* *string

The collection ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#collection_id DiscoveryEngineSearchEngine#collection_id}

---

##### `DataStoreIds`<sup>Required</sup> <a name="DataStoreIds" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.dataStoreIds"></a>

```go
DataStoreIds *[]*string
```

- *Type:* *[]*string

The data stores associated with this engine.

For SOLUTION_TYPE_SEARCH type of engines, they can only associate with at most one data store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#data_store_ids DiscoveryEngineSearchEngine#data_store_ids}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Required. The display name of the engine. Should be human readable. UTF-8 encoded string with limit of 1024 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#display_name DiscoveryEngineSearchEngine#display_name}

---

##### `EngineId`<sup>Required</sup> <a name="EngineId" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.engineId"></a>

```go
EngineId *string
```

- *Type:* *string

Unique ID to use for Search Engine App.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#engine_id DiscoveryEngineSearchEngine#engine_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#location DiscoveryEngineSearchEngine#location}

---

##### `SearchEngineConfig`<sup>Required</sup> <a name="SearchEngineConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.searchEngineConfig"></a>

```go
SearchEngineConfig DiscoveryEngineSearchEngineSearchEngineConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a>

search_engine_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#search_engine_config DiscoveryEngineSearchEngine#search_engine_config}

---

##### `CommonConfig`<sup>Optional</sup> <a name="CommonConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.commonConfig"></a>

```go
CommonConfig DiscoveryEngineSearchEngineCommonConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a>

common_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#common_config DiscoveryEngineSearchEngine#common_config}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#id DiscoveryEngineSearchEngine#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndustryVertical`<sup>Optional</sup> <a name="IndustryVertical" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.industryVertical"></a>

```go
IndustryVertical *string
```

- *Type:* *string

The industry vertical that the engine registers.

The restriction of the Engine industry vertical is based on DataStore: If unspecified, default to GENERIC. Vertical on Engine has to match vertical of the DataStore liniked to the engine. Default value: "GENERIC" Possible values: ["GENERIC", "MEDIA"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#industry_vertical DiscoveryEngineSearchEngine#industry_vertical}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#project DiscoveryEngineSearchEngine#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineConfig.property.timeouts"></a>

```go
Timeouts DiscoveryEngineSearchEngineTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts">DiscoveryEngineSearchEngineTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#timeouts DiscoveryEngineSearchEngine#timeouts}

---

### DiscoveryEngineSearchEngineSearchEngineConfig <a name="DiscoveryEngineSearchEngineSearchEngineConfig" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/discoveryenginesearchengine"

&discoveryenginesearchengine.DiscoveryEngineSearchEngineSearchEngineConfig {
	SearchAddOns: *[]*string,
	SearchTier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.searchAddOns">SearchAddOns</a></code> | <code>*[]*string</code> | The add-on that this search engine enables. Possible values: ["SEARCH_ADD_ON_LLM"]. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.searchTier">SearchTier</a></code> | <code>*string</code> | The search feature tier of this engine. |

---

##### `SearchAddOns`<sup>Optional</sup> <a name="SearchAddOns" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.searchAddOns"></a>

```go
SearchAddOns *[]*string
```

- *Type:* *[]*string

The add-on that this search engine enables. Possible values: ["SEARCH_ADD_ON_LLM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#search_add_ons DiscoveryEngineSearchEngine#search_add_ons}

---

##### `SearchTier`<sup>Optional</sup> <a name="SearchTier" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig.property.searchTier"></a>

```go
SearchTier *string
```

- *Type:* *string

The search feature tier of this engine.

Defaults to SearchTier.SEARCH_TIER_STANDARD if not specified. Default value: "SEARCH_TIER_STANDARD" Possible values: ["SEARCH_TIER_STANDARD", "SEARCH_TIER_ENTERPRISE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#search_tier DiscoveryEngineSearchEngine#search_tier}

---

### DiscoveryEngineSearchEngineTimeouts <a name="DiscoveryEngineSearchEngineTimeouts" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/discoveryenginesearchengine"

&discoveryenginesearchengine.DiscoveryEngineSearchEngineTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#create DiscoveryEngineSearchEngine#create}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#delete DiscoveryEngineSearchEngine#delete}. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#update DiscoveryEngineSearchEngine#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#create DiscoveryEngineSearchEngine#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#delete DiscoveryEngineSearchEngine#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/discovery_engine_search_engine#update DiscoveryEngineSearchEngine#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DiscoveryEngineSearchEngineCommonConfigOutputReference <a name="DiscoveryEngineSearchEngineCommonConfigOutputReference" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/discoveryenginesearchengine"

discoveryenginesearchengine.NewDiscoveryEngineSearchEngineCommonConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineSearchEngineCommonConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resetCompanyName">ResetCompanyName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompanyName` <a name="ResetCompanyName" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.resetCompanyName"></a>

```go
func ResetCompanyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyNameInput">CompanyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyName">CompanyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompanyNameInput`<sup>Optional</sup> <a name="CompanyNameInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyNameInput"></a>

```go
func CompanyNameInput() *string
```

- *Type:* *string

---

##### `CompanyName`<sup>Required</sup> <a name="CompanyName" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.companyName"></a>

```go
func CompanyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineSearchEngineCommonConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineCommonConfig">DiscoveryEngineSearchEngineCommonConfig</a>

---


### DiscoveryEngineSearchEngineSearchEngineConfigOutputReference <a name="DiscoveryEngineSearchEngineSearchEngineConfigOutputReference" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/discoveryenginesearchengine"

discoveryenginesearchengine.NewDiscoveryEngineSearchEngineSearchEngineConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineSearchEngineSearchEngineConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchAddOns">ResetSearchAddOns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchTier">ResetSearchTier</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSearchAddOns` <a name="ResetSearchAddOns" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchAddOns"></a>

```go
func ResetSearchAddOns()
```

##### `ResetSearchTier` <a name="ResetSearchTier" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.resetSearchTier"></a>

```go
func ResetSearchTier()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOnsInput">SearchAddOnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTierInput">SearchTierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOns">SearchAddOns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTier">SearchTier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SearchAddOnsInput`<sup>Optional</sup> <a name="SearchAddOnsInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOnsInput"></a>

```go
func SearchAddOnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SearchTierInput`<sup>Optional</sup> <a name="SearchTierInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTierInput"></a>

```go
func SearchTierInput() *string
```

- *Type:* *string

---

##### `SearchAddOns`<sup>Required</sup> <a name="SearchAddOns" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchAddOns"></a>

```go
func SearchAddOns() *[]*string
```

- *Type:* *[]*string

---

##### `SearchTier`<sup>Required</sup> <a name="SearchTier" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.searchTier"></a>

```go
func SearchTier() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DiscoveryEngineSearchEngineSearchEngineConfig
```

- *Type:* <a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineSearchEngineConfig">DiscoveryEngineSearchEngineSearchEngineConfig</a>

---


### DiscoveryEngineSearchEngineTimeoutsOutputReference <a name="DiscoveryEngineSearchEngineTimeoutsOutputReference" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v13/discoveryenginesearchengine"

discoveryenginesearchengine.NewDiscoveryEngineSearchEngineTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DiscoveryEngineSearchEngineTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.discoveryEngineSearchEngine.DiscoveryEngineSearchEngineTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



