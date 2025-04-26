# `geminiCodeRepositoryIndex` Submodule <a name="`geminiCodeRepositoryIndex` Submodule" id="@cdktf/provider-google.geminiCodeRepositoryIndex"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiCodeRepositoryIndex <a name="GeminiCodeRepositoryIndex" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/gemini_code_repository_index google_gemini_code_repository_index}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicoderepositoryindex"

geminicoderepositoryindex.NewGeminiCodeRepositoryIndex(scope Construct, id *string, config GeminiCodeRepositoryIndexConfig) GeminiCodeRepositoryIndex
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig">GeminiCodeRepositoryIndexConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig">GeminiCodeRepositoryIndexConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetForceDestroy">ResetForceDestroy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetKmsKey">ResetKmsKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.putTimeouts"></a>

```go
func PutTimeouts(value GeminiCodeRepositoryIndexTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts">GeminiCodeRepositoryIndexTimeouts</a>

---

##### `ResetForceDestroy` <a name="ResetForceDestroy" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetForceDestroy"></a>

```go
func ResetForceDestroy()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetId"></a>

```go
func ResetId()
```

##### `ResetKmsKey` <a name="ResetKmsKey" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetKmsKey"></a>

```go
func ResetKmsKey()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a GeminiCodeRepositoryIndex resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicoderepositoryindex"

geminicoderepositoryindex.GeminiCodeRepositoryIndex_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicoderepositoryindex"

geminicoderepositoryindex.GeminiCodeRepositoryIndex_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicoderepositoryindex"

geminicoderepositoryindex.GeminiCodeRepositoryIndex_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicoderepositoryindex"

geminicoderepositoryindex.GeminiCodeRepositoryIndex_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a GeminiCodeRepositoryIndex resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the GeminiCodeRepositoryIndex to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing GeminiCodeRepositoryIndex that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/gemini_code_repository_index#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the GeminiCodeRepositoryIndex to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.effectiveLabels">EffectiveLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.terraformLabels">TerraformLabels</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference">GeminiCodeRepositoryIndexTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.codeRepositoryIndexIdInput">CodeRepositoryIndexIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.forceDestroyInput">ForceDestroyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.kmsKeyInput">KmsKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.codeRepositoryIndexId">CodeRepositoryIndexId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.kmsKey">KmsKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.project">Project</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `EffectiveLabels`<sup>Required</sup> <a name="EffectiveLabels" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.effectiveLabels"></a>

```go
func EffectiveLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TerraformLabels`<sup>Required</sup> <a name="TerraformLabels" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.terraformLabels"></a>

```go
func TerraformLabels() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.timeouts"></a>

```go
func Timeouts() GeminiCodeRepositoryIndexTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference">GeminiCodeRepositoryIndexTimeoutsOutputReference</a>

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `CodeRepositoryIndexIdInput`<sup>Optional</sup> <a name="CodeRepositoryIndexIdInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.codeRepositoryIndexIdInput"></a>

```go
func CodeRepositoryIndexIdInput() *string
```

- *Type:* *string

---

##### `ForceDestroyInput`<sup>Optional</sup> <a name="ForceDestroyInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.forceDestroyInput"></a>

```go
func ForceDestroyInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KmsKeyInput`<sup>Optional</sup> <a name="KmsKeyInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.kmsKeyInput"></a>

```go
func KmsKeyInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CodeRepositoryIndexId`<sup>Required</sup> <a name="CodeRepositoryIndexId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.codeRepositoryIndexId"></a>

```go
func CodeRepositoryIndexId() *string
```

- *Type:* *string

---

##### `ForceDestroy`<sup>Required</sup> <a name="ForceDestroy" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.forceDestroy"></a>

```go
func ForceDestroy() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KmsKey`<sup>Required</sup> <a name="KmsKey" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.kmsKey"></a>

```go
func KmsKey() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndex.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiCodeRepositoryIndexConfig <a name="GeminiCodeRepositoryIndexConfig" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicoderepositoryindex"

&geminicoderepositoryindex.GeminiCodeRepositoryIndexConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CodeRepositoryIndexId: *string,
	Location: *string,
	ForceDestroy: interface{},
	Id: *string,
	KmsKey: *string,
	Labels: *map[string]*string,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.codeRepositoryIndexId">CodeRepositoryIndexId</a></code> | <code>*string</code> | Required. Id of the Code Repository Index. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.location">Location</a></code> | <code>*string</code> | The location of the Code Repository Index, for example 'us-central1'. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.forceDestroy">ForceDestroy</a></code> | <code>interface{}</code> | If set to true, will allow deletion of the CodeRepositoryIndex even if there are existing RepositoryGroups for the resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/gemini_code_repository_index#id GeminiCodeRepositoryIndex#id}. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.kmsKey">KmsKey</a></code> | <code>*string</code> | Optional. Immutable. Customer-managed encryption key name, in the format 'projects/* /locations/* /keyRings/* /cryptoKeys/*'. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Optional. Labels as key value pairs. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/gemini_code_repository_index#project GeminiCodeRepositoryIndex#project}. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts">GeminiCodeRepositoryIndexTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CodeRepositoryIndexId`<sup>Required</sup> <a name="CodeRepositoryIndexId" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.codeRepositoryIndexId"></a>

```go
CodeRepositoryIndexId *string
```

- *Type:* *string

Required. Id of the Code Repository Index.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/gemini_code_repository_index#code_repository_index_id GeminiCodeRepositoryIndex#code_repository_index_id}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the Code Repository Index, for example 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/gemini_code_repository_index#location GeminiCodeRepositoryIndex#location}

---

##### `ForceDestroy`<sup>Optional</sup> <a name="ForceDestroy" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.forceDestroy"></a>

```go
ForceDestroy interface{}
```

- *Type:* interface{}

If set to true, will allow deletion of the CodeRepositoryIndex even if there are existing RepositoryGroups for the resource.

These RepositoryGroups will also be deleted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/gemini_code_repository_index#force_destroy GeminiCodeRepositoryIndex#force_destroy}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/gemini_code_repository_index#id GeminiCodeRepositoryIndex#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KmsKey`<sup>Optional</sup> <a name="KmsKey" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.kmsKey"></a>

```go
KmsKey *string
```

- *Type:* *string

Optional. Immutable. Customer-managed encryption key name, in the format 'projects/* /locations/* /keyRings/* /cryptoKeys/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/gemini_code_repository_index#kms_key GeminiCodeRepositoryIndex#kms_key}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Optional. Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/gemini_code_repository_index#labels GeminiCodeRepositoryIndex#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/gemini_code_repository_index#project GeminiCodeRepositoryIndex#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexConfig.property.timeouts"></a>

```go
Timeouts GeminiCodeRepositoryIndexTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts">GeminiCodeRepositoryIndexTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/gemini_code_repository_index#timeouts GeminiCodeRepositoryIndex#timeouts}

---

### GeminiCodeRepositoryIndexTimeouts <a name="GeminiCodeRepositoryIndexTimeouts" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicoderepositoryindex"

&geminicoderepositoryindex.GeminiCodeRepositoryIndexTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/gemini_code_repository_index#create GeminiCodeRepositoryIndex#create}. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/gemini_code_repository_index#delete GeminiCodeRepositoryIndex#delete}. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/gemini_code_repository_index#update GeminiCodeRepositoryIndex#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/gemini_code_repository_index#create GeminiCodeRepositoryIndex#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/gemini_code_repository_index#delete GeminiCodeRepositoryIndex#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.32.0/docs/resources/gemini_code_repository_index#update GeminiCodeRepositoryIndex#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiCodeRepositoryIndexTimeoutsOutputReference <a name="GeminiCodeRepositoryIndexTimeoutsOutputReference" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/geminicoderepositoryindex"

geminicoderepositoryindex.NewGeminiCodeRepositoryIndexTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) GeminiCodeRepositoryIndexTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.geminiCodeRepositoryIndex.GeminiCodeRepositoryIndexTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



