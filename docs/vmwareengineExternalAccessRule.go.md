# `vmwareengineExternalAccessRule` Submodule <a name="`vmwareengineExternalAccessRule` Submodule" id="@cdktf/provider-google.vmwareengineExternalAccessRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VmwareengineExternalAccessRule <a name="VmwareengineExternalAccessRule" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule google_vmwareengine_external_access_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineexternalaccessrule"

vmwareengineexternalaccessrule.NewVmwareengineExternalAccessRule(scope Construct, id *string, config VmwareengineExternalAccessRuleConfig) VmwareengineExternalAccessRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig">VmwareengineExternalAccessRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig">VmwareengineExternalAccessRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putDestinationIpRanges">PutDestinationIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putSourceIpRanges">PutSourceIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDestinationIpRanges` <a name="PutDestinationIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putDestinationIpRanges"></a>

```go
func PutDestinationIpRanges(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putDestinationIpRanges.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSourceIpRanges` <a name="PutSourceIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putSourceIpRanges"></a>

```go
func PutSourceIpRanges(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putSourceIpRanges.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putTimeouts"></a>

```go
func PutTimeouts(value VmwareengineExternalAccessRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts">VmwareengineExternalAccessRuleTimeouts</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a VmwareengineExternalAccessRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineexternalaccessrule"

vmwareengineexternalaccessrule.VmwareengineExternalAccessRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineexternalaccessrule"

vmwareengineexternalaccessrule.VmwareengineExternalAccessRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineexternalaccessrule"

vmwareengineexternalaccessrule.VmwareengineExternalAccessRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineexternalaccessrule"

vmwareengineexternalaccessrule.VmwareengineExternalAccessRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a VmwareengineExternalAccessRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the VmwareengineExternalAccessRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing VmwareengineExternalAccessRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the VmwareengineExternalAccessRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.createTime">CreateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationIpRanges">DestinationIpRanges</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList">VmwareengineExternalAccessRuleDestinationIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourceIpRanges">SourceIpRanges</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList">VmwareengineExternalAccessRuleSourceIpRangesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference">VmwareengineExternalAccessRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.uid">Uid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.updateTime">UpdateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationIpRangesInput">DestinationIpRangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationPortsInput">DestinationPortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.ipProtocolInput">IpProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.parentInput">ParentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourceIpRangesInput">SourceIpRangesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourcePortsInput">SourcePortsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationPorts">DestinationPorts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.parent">Parent</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourcePorts">SourcePorts</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreateTime`<sup>Required</sup> <a name="CreateTime" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.createTime"></a>

```go
func CreateTime() *string
```

- *Type:* *string

---

##### `DestinationIpRanges`<sup>Required</sup> <a name="DestinationIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationIpRanges"></a>

```go
func DestinationIpRanges() VmwareengineExternalAccessRuleDestinationIpRangesList
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList">VmwareengineExternalAccessRuleDestinationIpRangesList</a>

---

##### `SourceIpRanges`<sup>Required</sup> <a name="SourceIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourceIpRanges"></a>

```go
func SourceIpRanges() VmwareengineExternalAccessRuleSourceIpRangesList
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList">VmwareengineExternalAccessRuleSourceIpRangesList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.timeouts"></a>

```go
func Timeouts() VmwareengineExternalAccessRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference">VmwareengineExternalAccessRuleTimeoutsOutputReference</a>

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.uid"></a>

```go
func Uid() *string
```

- *Type:* *string

---

##### `UpdateTime`<sup>Required</sup> <a name="UpdateTime" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.updateTime"></a>

```go
func UpdateTime() *string
```

- *Type:* *string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DestinationIpRangesInput`<sup>Optional</sup> <a name="DestinationIpRangesInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationIpRangesInput"></a>

```go
func DestinationIpRangesInput() interface{}
```

- *Type:* interface{}

---

##### `DestinationPortsInput`<sup>Optional</sup> <a name="DestinationPortsInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationPortsInput"></a>

```go
func DestinationPortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IpProtocolInput`<sup>Optional</sup> <a name="IpProtocolInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.ipProtocolInput"></a>

```go
func IpProtocolInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ParentInput`<sup>Optional</sup> <a name="ParentInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.parentInput"></a>

```go
func ParentInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `SourceIpRangesInput`<sup>Optional</sup> <a name="SourceIpRangesInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourceIpRangesInput"></a>

```go
func SourceIpRangesInput() interface{}
```

- *Type:* interface{}

---

##### `SourcePortsInput`<sup>Optional</sup> <a name="SourcePortsInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourcePortsInput"></a>

```go
func SourcePortsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.destinationPorts"></a>

```go
func DestinationPorts() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.ipProtocol"></a>

```go
func IpProtocol() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.parent"></a>

```go
func Parent() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `SourcePorts`<sup>Required</sup> <a name="SourcePorts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.sourcePorts"></a>

```go
func SourcePorts() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### VmwareengineExternalAccessRuleConfig <a name="VmwareengineExternalAccessRuleConfig" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineexternalaccessrule"

&vmwareengineexternalaccessrule.VmwareengineExternalAccessRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Action: *string,
	DestinationIpRanges: interface{},
	DestinationPorts: *[]*string,
	IpProtocol: *string,
	Name: *string,
	Parent: *string,
	Priority: *f64,
	SourceIpRanges: interface{},
	SourcePorts: *[]*string,
	Description: *string,
	Id: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.action">Action</a></code> | <code>*string</code> | The action that the external access rule performs. Possible values: ["ALLOW", "DENY"]. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.destinationIpRanges">DestinationIpRanges</a></code> | <code>interface{}</code> | destination_ip_ranges block. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.destinationPorts">DestinationPorts</a></code> | <code>*[]*string</code> | A list of destination ports to which the external access rule applies. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.ipProtocol">IpProtocol</a></code> | <code>*string</code> | The IP protocol to which the external access rule applies. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.name">Name</a></code> | <code>*string</code> | The ID of the external access rule. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.parent">Parent</a></code> | <code>*string</code> | The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.priority">Priority</a></code> | <code>*f64</code> | External access rule priority, which determines the external access rule to use when multiple rules apply. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.sourceIpRanges">SourceIpRanges</a></code> | <code>interface{}</code> | source_ip_ranges block. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.sourcePorts">SourcePorts</a></code> | <code>*[]*string</code> | A list of source ports to which the external access rule applies. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.description">Description</a></code> | <code>*string</code> | User-provided description for the external access rule. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#id VmwareengineExternalAccessRule#id}. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts">VmwareengineExternalAccessRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.action"></a>

```go
Action *string
```

- *Type:* *string

The action that the external access rule performs. Possible values: ["ALLOW", "DENY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#action VmwareengineExternalAccessRule#action}

---

##### `DestinationIpRanges`<sup>Required</sup> <a name="DestinationIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.destinationIpRanges"></a>

```go
DestinationIpRanges interface{}
```

- *Type:* interface{}

destination_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#destination_ip_ranges VmwareengineExternalAccessRule#destination_ip_ranges}

---

##### `DestinationPorts`<sup>Required</sup> <a name="DestinationPorts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.destinationPorts"></a>

```go
DestinationPorts *[]*string
```

- *Type:* *[]*string

A list of destination ports to which the external access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#destination_ports VmwareengineExternalAccessRule#destination_ports}

---

##### `IpProtocol`<sup>Required</sup> <a name="IpProtocol" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.ipProtocol"></a>

```go
IpProtocol *string
```

- *Type:* *string

The IP protocol to which the external access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#ip_protocol VmwareengineExternalAccessRule#ip_protocol}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The ID of the external access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#name VmwareengineExternalAccessRule#name}

---

##### `Parent`<sup>Required</sup> <a name="Parent" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.parent"></a>

```go
Parent *string
```

- *Type:* *string

The resource name of the network policy. Resource names are schemeless URIs that follow the conventions in https://cloud.google.com/apis/design/resource_names. For example: projects/my-project/locations/us-west1-a/networkPolicies/my-policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#parent VmwareengineExternalAccessRule#parent}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

External access rule priority, which determines the external access rule to use when multiple rules apply.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#priority VmwareengineExternalAccessRule#priority}

---

##### `SourceIpRanges`<sup>Required</sup> <a name="SourceIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.sourceIpRanges"></a>

```go
SourceIpRanges interface{}
```

- *Type:* interface{}

source_ip_ranges block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#source_ip_ranges VmwareengineExternalAccessRule#source_ip_ranges}

---

##### `SourcePorts`<sup>Required</sup> <a name="SourcePorts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.sourcePorts"></a>

```go
SourcePorts *[]*string
```

- *Type:* *[]*string

A list of source ports to which the external access rule applies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#source_ports VmwareengineExternalAccessRule#source_ports}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

User-provided description for the external access rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#description VmwareengineExternalAccessRule#description}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#id VmwareengineExternalAccessRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleConfig.property.timeouts"></a>

```go
Timeouts VmwareengineExternalAccessRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts">VmwareengineExternalAccessRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#timeouts VmwareengineExternalAccessRule#timeouts}

---

### VmwareengineExternalAccessRuleDestinationIpRanges <a name="VmwareengineExternalAccessRuleDestinationIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineexternalaccessrule"

&vmwareengineexternalaccessrule.VmwareengineExternalAccessRuleDestinationIpRanges {
	ExternalAddress: *string,
	IpAddressRange: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges.property.externalAddress">ExternalAddress</a></code> | <code>*string</code> | The name of an 'ExternalAddress' resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges.property.ipAddressRange">IpAddressRange</a></code> | <code>*string</code> | An IP address range in the CIDR format. |

---

##### `ExternalAddress`<sup>Optional</sup> <a name="ExternalAddress" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges.property.externalAddress"></a>

```go
ExternalAddress *string
```

- *Type:* *string

The name of an 'ExternalAddress' resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#external_address VmwareengineExternalAccessRule#external_address}

---

##### `IpAddressRange`<sup>Optional</sup> <a name="IpAddressRange" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRanges.property.ipAddressRange"></a>

```go
IpAddressRange *string
```

- *Type:* *string

An IP address range in the CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#ip_address_range VmwareengineExternalAccessRule#ip_address_range}

---

### VmwareengineExternalAccessRuleSourceIpRanges <a name="VmwareengineExternalAccessRuleSourceIpRanges" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineexternalaccessrule"

&vmwareengineexternalaccessrule.VmwareengineExternalAccessRuleSourceIpRanges {
	IpAddress: *string,
	IpAddressRange: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges.property.ipAddress">IpAddress</a></code> | <code>*string</code> | A single IP address. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges.property.ipAddressRange">IpAddressRange</a></code> | <code>*string</code> | An IP address range in the CIDR format. |

---

##### `IpAddress`<sup>Optional</sup> <a name="IpAddress" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges.property.ipAddress"></a>

```go
IpAddress *string
```

- *Type:* *string

A single IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#ip_address VmwareengineExternalAccessRule#ip_address}

---

##### `IpAddressRange`<sup>Optional</sup> <a name="IpAddressRange" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRanges.property.ipAddressRange"></a>

```go
IpAddressRange *string
```

- *Type:* *string

An IP address range in the CIDR format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#ip_address_range VmwareengineExternalAccessRule#ip_address_range}

---

### VmwareengineExternalAccessRuleTimeouts <a name="VmwareengineExternalAccessRuleTimeouts" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineexternalaccessrule"

&vmwareengineexternalaccessrule.VmwareengineExternalAccessRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#create VmwareengineExternalAccessRule#create}. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#delete VmwareengineExternalAccessRule#delete}. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#update VmwareengineExternalAccessRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#create VmwareengineExternalAccessRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#delete VmwareengineExternalAccessRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.23.0/docs/resources/vmwareengine_external_access_rule#update VmwareengineExternalAccessRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VmwareengineExternalAccessRuleDestinationIpRangesList <a name="VmwareengineExternalAccessRuleDestinationIpRangesList" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineexternalaccessrule"

vmwareengineexternalaccessrule.NewVmwareengineExternalAccessRuleDestinationIpRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VmwareengineExternalAccessRuleDestinationIpRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.get"></a>

```go
func Get(index *f64) VmwareengineExternalAccessRuleDestinationIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VmwareengineExternalAccessRuleDestinationIpRangesOutputReference <a name="VmwareengineExternalAccessRuleDestinationIpRangesOutputReference" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineexternalaccessrule"

vmwareengineexternalaccessrule.NewVmwareengineExternalAccessRuleDestinationIpRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VmwareengineExternalAccessRuleDestinationIpRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetExternalAddress">ResetExternalAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetIpAddressRange">ResetIpAddressRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExternalAddress` <a name="ResetExternalAddress" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetExternalAddress"></a>

```go
func ResetExternalAddress()
```

##### `ResetIpAddressRange` <a name="ResetIpAddressRange" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.resetIpAddressRange"></a>

```go
func ResetIpAddressRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddressInput">ExternalAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRangeInput">IpAddressRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddress">ExternalAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRange">IpAddressRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExternalAddressInput`<sup>Optional</sup> <a name="ExternalAddressInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddressInput"></a>

```go
func ExternalAddressInput() *string
```

- *Type:* *string

---

##### `IpAddressRangeInput`<sup>Optional</sup> <a name="IpAddressRangeInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRangeInput"></a>

```go
func IpAddressRangeInput() *string
```

- *Type:* *string

---

##### `ExternalAddress`<sup>Required</sup> <a name="ExternalAddress" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.externalAddress"></a>

```go
func ExternalAddress() *string
```

- *Type:* *string

---

##### `IpAddressRange`<sup>Required</sup> <a name="IpAddressRange" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.ipAddressRange"></a>

```go
func IpAddressRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleDestinationIpRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VmwareengineExternalAccessRuleSourceIpRangesList <a name="VmwareengineExternalAccessRuleSourceIpRangesList" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineexternalaccessrule"

vmwareengineexternalaccessrule.NewVmwareengineExternalAccessRuleSourceIpRangesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) VmwareengineExternalAccessRuleSourceIpRangesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.get"></a>

```go
func Get(index *f64) VmwareengineExternalAccessRuleSourceIpRangesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VmwareengineExternalAccessRuleSourceIpRangesOutputReference <a name="VmwareengineExternalAccessRuleSourceIpRangesOutputReference" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineexternalaccessrule"

vmwareengineexternalaccessrule.NewVmwareengineExternalAccessRuleSourceIpRangesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) VmwareengineExternalAccessRuleSourceIpRangesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddress">ResetIpAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddressRange">ResetIpAddressRange</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddress` <a name="ResetIpAddress" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddress"></a>

```go
func ResetIpAddress()
```

##### `ResetIpAddressRange` <a name="ResetIpAddressRange" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.resetIpAddressRange"></a>

```go
func ResetIpAddressRange()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressInput">IpAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRangeInput">IpAddressRangeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRange">IpAddressRange</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressInput`<sup>Optional</sup> <a name="IpAddressInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressInput"></a>

```go
func IpAddressInput() *string
```

- *Type:* *string

---

##### `IpAddressRangeInput`<sup>Optional</sup> <a name="IpAddressRangeInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRangeInput"></a>

```go
func IpAddressRangeInput() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IpAddressRange`<sup>Required</sup> <a name="IpAddressRange" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.ipAddressRange"></a>

```go
func IpAddressRange() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleSourceIpRangesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### VmwareengineExternalAccessRuleTimeoutsOutputReference <a name="VmwareengineExternalAccessRuleTimeoutsOutputReference" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/vmwareengineexternalaccessrule"

vmwareengineexternalaccessrule.NewVmwareengineExternalAccessRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) VmwareengineExternalAccessRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.vmwareengineExternalAccessRule.VmwareengineExternalAccessRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



