# `chronicleRule` Submodule <a name="`chronicleRule` Submodule" id="@cdktf/provider-google.chronicleRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleRule <a name="ChronicleRule" id="@cdktf/provider-google.chronicleRule.ChronicleRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule google_chronicle_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRule.ChronicleRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclerule"

chroniclerule.NewChronicleRule(scope Construct, id *string, config ChronicleRuleConfig) ChronicleRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig">ChronicleRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleRule.ChronicleRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRule.ChronicleRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.chronicleRule.ChronicleRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig">ChronicleRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.resetDeletionPolicy">ResetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.resetEtag">ResetEtag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.resetRuleId">ResetRuleId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRule.ChronicleRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.chronicleRule.ChronicleRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.chronicleRule.ChronicleRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleRule.ChronicleRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.chronicleRule.ChronicleRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.chronicleRule.ChronicleRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.chronicleRule.ChronicleRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.chronicleRule.ChronicleRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.chronicleRule.ChronicleRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.chronicleRule.ChronicleRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.chronicleRule.ChronicleRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRule.ChronicleRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRule.ChronicleRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRule.ChronicleRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.chronicleRule.ChronicleRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.chronicleRule.ChronicleRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.chronicleRule.ChronicleRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.chronicleRule.ChronicleRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.chronicleRule.ChronicleRule.putTimeouts"></a>

```go
func PutTimeouts(value ChronicleRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.chronicleRule.ChronicleRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts">ChronicleRuleTimeouts</a>

---

##### `ResetDeletionPolicy` <a name="ResetDeletionPolicy" id="@cdktf/provider-google.chronicleRule.ChronicleRule.resetDeletionPolicy"></a>

```go
func ResetDeletionPolicy()
```

##### `ResetEtag` <a name="ResetEtag" id="@cdktf/provider-google.chronicleRule.ChronicleRule.resetEtag"></a>

```go
func ResetEtag()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.resetId"></a>

```go
func ResetId()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.chronicleRule.ChronicleRule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetRuleId` <a name="ResetRuleId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.resetRuleId"></a>

```go
func ResetRuleId()
```

##### `ResetScope` <a name="ResetScope" id="@cdktf/provider-google.chronicleRule.ChronicleRule.resetScope"></a>

```go
func ResetScope()
```

##### `ResetText` <a name="ResetText" id="@cdktf/provider-google.chronicleRule.ChronicleRule.resetText"></a>

```go
func ResetText()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.chronicleRule.ChronicleRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ChronicleRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.chronicleRule.ChronicleRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclerule"

chroniclerule.ChronicleRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleRule.ChronicleRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.chronicleRule.ChronicleRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclerule"

chroniclerule.ChronicleRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleRule.ChronicleRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.chronicleRule.ChronicleRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclerule"

chroniclerule.ChronicleRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.chronicleRule.ChronicleRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.chronicleRule.ChronicleRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclerule"

chroniclerule.ChronicleRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ChronicleRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.chronicleRule.ChronicleRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ChronicleRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ChronicleRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.chronicleRule.ChronicleRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ChronicleRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.allowedRunFrequencies">AllowedRunFrequencies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.author">Author</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.compilationDiagnostics">CompilationDiagnostics</a></code> | <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList">ChronicleRuleCompilationDiagnosticsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.compilationState">CompilationState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.dataTables">DataTables</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.metadata">Metadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.nearRealTimeLiveRuleEligible">NearRealTimeLiveRuleEligible</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.referenceLists">ReferenceLists</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.revisionCreateTime">RevisionCreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.revisionId">RevisionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.severity">Severity</a></code> | <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList">ChronicleRuleSeverityList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference">ChronicleRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.deletionPolicyInput">DeletionPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.etagInput">EtagInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.instanceInput">InstanceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.ruleIdInput">RuleIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.etag">Etag</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.instance">Instance</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.ruleId">RuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.text">Text</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllowedRunFrequencies`<sup>Required</sup> <a name="AllowedRunFrequencies" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.allowedRunFrequencies"></a>

```go
func AllowedRunFrequencies() *[]*string
```

- *Type:* *[]*string

---

##### `Author`<sup>Required</sup> <a name="Author" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.author"></a>

```go
func Author() *string
```

- *Type:* *string

---

##### `CompilationDiagnostics`<sup>Required</sup> <a name="CompilationDiagnostics" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.compilationDiagnostics"></a>

```go
func CompilationDiagnostics() ChronicleRuleCompilationDiagnosticsList
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList">ChronicleRuleCompilationDiagnosticsList</a>

---

##### `CompilationState`<sup>Required</sup> <a name="CompilationState" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.compilationState"></a>

```go
func CompilationState() *string
```

- *Type:* *string

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DataTables`<sup>Required</sup> <a name="DataTables" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.dataTables"></a>

```go
func DataTables() *[]*string
```

- *Type:* *[]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.metadata"></a>

```go
func Metadata() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NearRealTimeLiveRuleEligible`<sup>Required</sup> <a name="NearRealTimeLiveRuleEligible" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.nearRealTimeLiveRuleEligible"></a>

```go
func NearRealTimeLiveRuleEligible() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ReferenceLists`<sup>Required</sup> <a name="ReferenceLists" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.referenceLists"></a>

```go
func ReferenceLists() *[]*string
```

- *Type:* *[]*string

---

##### `RevisionCreateTime`<sup>Required</sup> <a name="RevisionCreateTime" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.revisionCreateTime"></a>

```go
func RevisionCreateTime() *string
```

- *Type:* *string

---

##### `RevisionId`<sup>Required</sup> <a name="RevisionId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.revisionId"></a>

```go
func RevisionId() *string
```

- *Type:* *string

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.severity"></a>

```go
func Severity() ChronicleRuleSeverityList
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList">ChronicleRuleSeverityList</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.timeouts"></a>

```go
func Timeouts() ChronicleRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference">ChronicleRuleTimeoutsOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `DeletionPolicyInput`<sup>Optional</sup> <a name="DeletionPolicyInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.deletionPolicyInput"></a>

```go
func DeletionPolicyInput() *string
```

- *Type:* *string

---

##### `EtagInput`<sup>Optional</sup> <a name="EtagInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.etagInput"></a>

```go
func EtagInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InstanceInput`<sup>Optional</sup> <a name="InstanceInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.instanceInput"></a>

```go
func InstanceInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `RuleIdInput`<sup>Optional</sup> <a name="RuleIdInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.ruleIdInput"></a>

```go
func RuleIdInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.deletionPolicy"></a>

```go
func DeletionPolicy() *string
```

- *Type:* *string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.etag"></a>

```go
func Etag() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.instance"></a>

```go
func Instance() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `RuleId`<sup>Required</sup> <a name="RuleId" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.ruleId"></a>

```go
func RuleId() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.chronicleRule.ChronicleRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleRuleCompilationDiagnostics <a name="ChronicleRuleCompilationDiagnostics" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnostics"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnostics.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclerule"

&chroniclerule.ChronicleRuleCompilationDiagnostics {

}
```


### ChronicleRuleCompilationDiagnosticsPosition <a name="ChronicleRuleCompilationDiagnosticsPosition" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPosition"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPosition.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclerule"

&chroniclerule.ChronicleRuleCompilationDiagnosticsPosition {

}
```


### ChronicleRuleConfig <a name="ChronicleRuleConfig" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclerule"

&chroniclerule.ChronicleRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Instance: *string,
	Location: *string,
	DeletionPolicy: *string,
	Etag: *string,
	Id: *string,
	Project: *string,
	RuleId: *string,
	Scope: *string,
	Text: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v14.chronicleRule.ChronicleRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.instance">Instance</a></code> | <code>*string</code> | The unique identifier for the Chronicle instance, which is the same as the customer ID. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.location">Location</a></code> | <code>*string</code> | The location of the resource. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.deletionPolicy">DeletionPolicy</a></code> | <code>*string</code> | Policy to determine if the rule should be deleted forcefully. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.etag">Etag</a></code> | <code>*string</code> | The etag for this rule. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule#id ChronicleRule#id}. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule#project ChronicleRule#project}. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.ruleId">RuleId</a></code> | <code>*string</code> | Rule Id is the ID of the Rule. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.scope">Scope</a></code> | <code>*string</code> | Resource name of the DataAccessScope bound to this rule. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.text">Text</a></code> | <code>*string</code> | The YARA-L content of the rule. Populated in FULL view. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts">ChronicleRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Instance`<sup>Required</sup> <a name="Instance" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.instance"></a>

```go
Instance *string
```

- *Type:* *string

The unique identifier for the Chronicle instance, which is the same as the customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule#instance ChronicleRule#instance}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location of the resource.

This is the geographical region where the Chronicle instance resides, such as "us" or "europe-west2".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule#location ChronicleRule#location}

---

##### `DeletionPolicy`<sup>Optional</sup> <a name="DeletionPolicy" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.deletionPolicy"></a>

```go
DeletionPolicy *string
```

- *Type:* *string

Policy to determine if the rule should be deleted forcefully.

If deletion_policy = "FORCE", any retrohunts and any detections associated with the rule
will also be deleted. If deletion_policy = "DEFAULT", the call will only succeed if the
rule has no associated retrohunts, including completed retrohunts, and no
associated detections. Regardless of this field's value, the rule
deployment associated with this rule will also be deleted.
Possible values: DEFAULT, FORCE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule#deletion_policy ChronicleRule#deletion_policy}

---

##### `Etag`<sup>Optional</sup> <a name="Etag" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.etag"></a>

```go
Etag *string
```

- *Type:* *string

The etag for this rule.

If this is provided on update, the request will succeed if and only if it
matches the server-computed value, and will fail with an ABORTED error
otherwise.
Populated in BASIC view and FULL view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule#etag ChronicleRule#etag}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule#id ChronicleRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule#project ChronicleRule#project}.

---

##### `RuleId`<sup>Optional</sup> <a name="RuleId" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.ruleId"></a>

```go
RuleId *string
```

- *Type:* *string

Rule Id is the ID of the Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule#rule_id ChronicleRule#rule_id}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

Resource name of the DataAccessScope bound to this rule.

Populated in BASIC view and FULL view.
If reference lists are used in the rule, validations will be performed
against this scope to ensure that the reference lists are compatible with
both the user's and the rule's scopes.
The scope should be in the format:
"projects/{project}/locations/{location}/instances/{instance}/dataAccessScopes/{scope}".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule#scope ChronicleRule#scope}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.text"></a>

```go
Text *string
```

- *Type:* *string

The YARA-L content of the rule. Populated in FULL view.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule#text ChronicleRule#text}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.chronicleRule.ChronicleRuleConfig.property.timeouts"></a>

```go
Timeouts ChronicleRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts">ChronicleRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule#timeouts ChronicleRule#timeouts}

---

### ChronicleRuleSeverity <a name="ChronicleRuleSeverity" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverity"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverity.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclerule"

&chroniclerule.ChronicleRuleSeverity {

}
```


### ChronicleRuleTimeouts <a name="ChronicleRuleTimeouts" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclerule"

&chroniclerule.ChronicleRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule#create ChronicleRule#create}. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule#delete ChronicleRule#delete}. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule#update ChronicleRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule#create ChronicleRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule#delete ChronicleRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.33.0/docs/resources/chronicle_rule#update ChronicleRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleRuleCompilationDiagnosticsList <a name="ChronicleRuleCompilationDiagnosticsList" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclerule"

chroniclerule.NewChronicleRuleCompilationDiagnosticsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChronicleRuleCompilationDiagnosticsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.get"></a>

```go
func Get(index *f64) ChronicleRuleCompilationDiagnosticsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ChronicleRuleCompilationDiagnosticsOutputReference <a name="ChronicleRuleCompilationDiagnosticsOutputReference" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclerule"

chroniclerule.NewChronicleRuleCompilationDiagnosticsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChronicleRuleCompilationDiagnosticsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.position">Position</a></code> | <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList">ChronicleRuleCompilationDiagnosticsPositionList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.severity">Severity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnostics">ChronicleRuleCompilationDiagnostics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.position"></a>

```go
func Position() ChronicleRuleCompilationDiagnosticsPositionList
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList">ChronicleRuleCompilationDiagnosticsPositionList</a>

---

##### `Severity`<sup>Required</sup> <a name="Severity" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.severity"></a>

```go
func Severity() *string
```

- *Type:* *string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsOutputReference.property.internalValue"></a>

```go
func InternalValue() ChronicleRuleCompilationDiagnostics
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnostics">ChronicleRuleCompilationDiagnostics</a>

---


### ChronicleRuleCompilationDiagnosticsPositionList <a name="ChronicleRuleCompilationDiagnosticsPositionList" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclerule"

chroniclerule.NewChronicleRuleCompilationDiagnosticsPositionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChronicleRuleCompilationDiagnosticsPositionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.get"></a>

```go
func Get(index *f64) ChronicleRuleCompilationDiagnosticsPositionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ChronicleRuleCompilationDiagnosticsPositionOutputReference <a name="ChronicleRuleCompilationDiagnosticsPositionOutputReference" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclerule"

chroniclerule.NewChronicleRuleCompilationDiagnosticsPositionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChronicleRuleCompilationDiagnosticsPositionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.endColumn">EndColumn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.endLine">EndLine</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.startColumn">StartColumn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.startLine">StartLine</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPosition">ChronicleRuleCompilationDiagnosticsPosition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EndColumn`<sup>Required</sup> <a name="EndColumn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.endColumn"></a>

```go
func EndColumn() *f64
```

- *Type:* *f64

---

##### `EndLine`<sup>Required</sup> <a name="EndLine" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.endLine"></a>

```go
func EndLine() *f64
```

- *Type:* *f64

---

##### `StartColumn`<sup>Required</sup> <a name="StartColumn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.startColumn"></a>

```go
func StartColumn() *f64
```

- *Type:* *f64

---

##### `StartLine`<sup>Required</sup> <a name="StartLine" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.startLine"></a>

```go
func StartLine() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPositionOutputReference.property.internalValue"></a>

```go
func InternalValue() ChronicleRuleCompilationDiagnosticsPosition
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleCompilationDiagnosticsPosition">ChronicleRuleCompilationDiagnosticsPosition</a>

---


### ChronicleRuleSeverityList <a name="ChronicleRuleSeverityList" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclerule"

chroniclerule.NewChronicleRuleSeverityList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ChronicleRuleSeverityList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.get"></a>

```go
func Get(index *f64) ChronicleRuleSeverityOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ChronicleRuleSeverityOutputReference <a name="ChronicleRuleSeverityOutputReference" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclerule"

chroniclerule.NewChronicleRuleSeverityOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ChronicleRuleSeverityOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverity">ChronicleRuleSeverity</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleRule.ChronicleRuleSeverityOutputReference.property.internalValue"></a>

```go
func InternalValue() ChronicleRuleSeverity
```

- *Type:* <a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleSeverity">ChronicleRuleSeverity</a>

---


### ChronicleRuleTimeoutsOutputReference <a name="ChronicleRuleTimeoutsOutputReference" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v14/chroniclerule"

chroniclerule.NewChronicleRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ChronicleRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.chronicleRule.ChronicleRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



