# `dnsResponsePolicyRule` Submodule <a name="`dnsResponsePolicyRule` Submodule" id="@cdktf/provider-google.dnsResponsePolicyRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DnsResponsePolicyRule <a name="DnsResponsePolicyRule" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule google_dns_response_policy_rule}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dnsresponsepolicyrule"

dnsresponsepolicyrule.NewDnsResponsePolicyRule(scope Construct, id *string, config DnsResponsePolicyRuleConfig) DnsResponsePolicyRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig">DnsResponsePolicyRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig">DnsResponsePolicyRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.putLocalData">PutLocalData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetLocalData">ResetLocalData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutLocalData` <a name="PutLocalData" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.putLocalData"></a>

```go
func PutLocalData(value DnsResponsePolicyRuleLocalData)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.putLocalData.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.putTimeouts"></a>

```go
func PutTimeouts(value DnsResponsePolicyRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts">DnsResponsePolicyRuleTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetId"></a>

```go
func ResetId()
```

##### `ResetLocalData` <a name="ResetLocalData" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetLocalData"></a>

```go
func ResetLocalData()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetProject"></a>

```go
func ResetProject()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DnsResponsePolicyRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dnsresponsepolicyrule"

dnsresponsepolicyrule.DnsResponsePolicyRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dnsresponsepolicyrule"

dnsresponsepolicyrule.DnsResponsePolicyRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dnsresponsepolicyrule"

dnsresponsepolicyrule.DnsResponsePolicyRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.generateConfigForImport"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dnsresponsepolicyrule"

dnsresponsepolicyrule.DnsResponsePolicyRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DnsResponsePolicyRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DnsResponsePolicyRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DnsResponsePolicyRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DnsResponsePolicyRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.localData">LocalData</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference">DnsResponsePolicyRuleLocalDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference">DnsResponsePolicyRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.dnsNameInput">DnsNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.localDataInput">LocalDataInput</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.responsePolicyInput">ResponsePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.ruleNameInput">RuleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.responsePolicy">ResponsePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.ruleName">RuleName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LocalData`<sup>Required</sup> <a name="LocalData" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.localData"></a>

```go
func LocalData() DnsResponsePolicyRuleLocalDataOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference">DnsResponsePolicyRuleLocalDataOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.timeouts"></a>

```go
func Timeouts() DnsResponsePolicyRuleTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference">DnsResponsePolicyRuleTimeoutsOutputReference</a>

---

##### `DnsNameInput`<sup>Optional</sup> <a name="DnsNameInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.dnsNameInput"></a>

```go
func DnsNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LocalDataInput`<sup>Optional</sup> <a name="LocalDataInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.localDataInput"></a>

```go
func LocalDataInput() DnsResponsePolicyRuleLocalData
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a>

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `ResponsePolicyInput`<sup>Optional</sup> <a name="ResponsePolicyInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.responsePolicyInput"></a>

```go
func ResponsePolicyInput() *string
```

- *Type:* *string

---

##### `RuleNameInput`<sup>Optional</sup> <a name="RuleNameInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.ruleNameInput"></a>

```go
func RuleNameInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `ResponsePolicy`<sup>Required</sup> <a name="ResponsePolicy" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.responsePolicy"></a>

```go
func ResponsePolicy() *string
```

- *Type:* *string

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.ruleName"></a>

```go
func RuleName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DnsResponsePolicyRuleConfig <a name="DnsResponsePolicyRuleConfig" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dnsresponsepolicyrule"

&dnsresponsepolicyrule.DnsResponsePolicyRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DnsName: *string,
	ResponsePolicy: *string,
	RuleName: *string,
	Id: *string,
	LocalData: github.com/cdktf/cdktf-provider-google-go/google/v16.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData,
	Project: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google/v16.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.dnsName">DnsName</a></code> | <code>*string</code> | The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.responsePolicy">ResponsePolicy</a></code> | <code>*string</code> | Identifies the response policy addressed by this request. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.ruleName">RuleName</a></code> | <code>*string</code> | An identifier for this rule. Must be unique with the ResponsePolicy. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#id DnsResponsePolicyRule#id}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.localData">LocalData</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a></code> | local_data block. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#project DnsResponsePolicyRule#project}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts">DnsResponsePolicyRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.dnsName"></a>

```go
DnsName *string
```

- *Type:* *string

The DNS name (wildcard or exact) to apply this rule to. Must be unique within the Response Policy Rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#dns_name DnsResponsePolicyRule#dns_name}

---

##### `ResponsePolicy`<sup>Required</sup> <a name="ResponsePolicy" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.responsePolicy"></a>

```go
ResponsePolicy *string
```

- *Type:* *string

Identifies the response policy addressed by this request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#response_policy DnsResponsePolicyRule#response_policy}

---

##### `RuleName`<sup>Required</sup> <a name="RuleName" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.ruleName"></a>

```go
RuleName *string
```

- *Type:* *string

An identifier for this rule. Must be unique with the ResponsePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#rule_name DnsResponsePolicyRule#rule_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#id DnsResponsePolicyRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `LocalData`<sup>Optional</sup> <a name="LocalData" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.localData"></a>

```go
LocalData DnsResponsePolicyRuleLocalData
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a>

local_data block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#local_data DnsResponsePolicyRule#local_data}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#project DnsResponsePolicyRule#project}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleConfig.property.timeouts"></a>

```go
Timeouts DnsResponsePolicyRuleTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts">DnsResponsePolicyRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#timeouts DnsResponsePolicyRule#timeouts}

---

### DnsResponsePolicyRuleLocalData <a name="DnsResponsePolicyRuleLocalData" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dnsresponsepolicyrule"

&dnsresponsepolicyrule.DnsResponsePolicyRuleLocalData {
	LocalDatas: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData.property.localDatas">LocalDatas</a></code> | <code>interface{}</code> | local_datas block. |

---

##### `LocalDatas`<sup>Required</sup> <a name="LocalDatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData.property.localDatas"></a>

```go
LocalDatas interface{}
```

- *Type:* interface{}

local_datas block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#local_datas DnsResponsePolicyRule#local_datas}

---

### DnsResponsePolicyRuleLocalDataLocalDatas <a name="DnsResponsePolicyRuleLocalDataLocalDatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dnsresponsepolicyrule"

&dnsresponsepolicyrule.DnsResponsePolicyRuleLocalDataLocalDatas {
	Name: *string,
	Type: *string,
	Rrdatas: *[]*string,
	Ttl: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.name">Name</a></code> | <code>*string</code> | For example, www.example.com. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.type">Type</a></code> | <code>*string</code> | One of valid DNS resource types. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.rrdatas">Rrdatas</a></code> | <code>*[]*string</code> | As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1). |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.ttl">Ttl</a></code> | <code>*f64</code> | Number of seconds that this ResourceRecordSet can be cached by resolvers. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.name"></a>

```go
Name *string
```

- *Type:* *string

For example, www.example.com.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#name DnsResponsePolicyRule#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.type"></a>

```go
Type *string
```

- *Type:* *string

One of valid DNS resource types.

Possible values: ["A", "AAAA", "CAA", "CNAME", "DNSKEY", "DS", "HTTPS", "IPSECVPNKEY", "MX", "NAPTR", "NS", "PTR", "SOA", "SPF", "SRV", "SSHFP", "SVCB", "TLSA", "TXT"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#type DnsResponsePolicyRule#type}

---

##### `Rrdatas`<sup>Optional</sup> <a name="Rrdatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.rrdatas"></a>

```go
Rrdatas *[]*string
```

- *Type:* *[]*string

As defined in RFC 1035 (section 5) and RFC 1034 (section 3.6.1).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#rrdatas DnsResponsePolicyRule#rrdatas}

---

##### `Ttl`<sup>Optional</sup> <a name="Ttl" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatas.property.ttl"></a>

```go
Ttl *f64
```

- *Type:* *f64

Number of seconds that this ResourceRecordSet can be cached by resolvers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#ttl DnsResponsePolicyRule#ttl}

---

### DnsResponsePolicyRuleTimeouts <a name="DnsResponsePolicyRuleTimeouts" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dnsresponsepolicyrule"

&dnsresponsepolicyrule.DnsResponsePolicyRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#create DnsResponsePolicyRule#create}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#delete DnsResponsePolicyRule#delete}. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#update DnsResponsePolicyRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#create DnsResponsePolicyRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#delete DnsResponsePolicyRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.50.0/docs/resources/dns_response_policy_rule#update DnsResponsePolicyRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DnsResponsePolicyRuleLocalDataLocalDatasList <a name="DnsResponsePolicyRuleLocalDataLocalDatasList" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dnsresponsepolicyrule"

dnsresponsepolicyrule.NewDnsResponsePolicyRuleLocalDataLocalDatasList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DnsResponsePolicyRuleLocalDataLocalDatasList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.get"></a>

```go
func Get(index *f64) DnsResponsePolicyRuleLocalDataLocalDatasOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsResponsePolicyRuleLocalDataLocalDatasOutputReference <a name="DnsResponsePolicyRuleLocalDataLocalDatasOutputReference" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dnsresponsepolicyrule"

dnsresponsepolicyrule.NewDnsResponsePolicyRuleLocalDataLocalDatasOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DnsResponsePolicyRuleLocalDataLocalDatasOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetRrdatas">ResetRrdatas</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetTtl">ResetTtl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRrdatas` <a name="ResetRrdatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetRrdatas"></a>

```go
func ResetRrdatas()
```

##### `ResetTtl` <a name="ResetTtl" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.resetTtl"></a>

```go
func ResetTtl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatasInput">RrdatasInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttlInput">TtlInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatas">Rrdatas</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttl">Ttl</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RrdatasInput`<sup>Optional</sup> <a name="RrdatasInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatasInput"></a>

```go
func RrdatasInput() *[]*string
```

- *Type:* *[]*string

---

##### `TtlInput`<sup>Optional</sup> <a name="TtlInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttlInput"></a>

```go
func TtlInput() *f64
```

- *Type:* *f64

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Rrdatas`<sup>Required</sup> <a name="Rrdatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.rrdatas"></a>

```go
func Rrdatas() *[]*string
```

- *Type:* *[]*string

---

##### `Ttl`<sup>Required</sup> <a name="Ttl" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.ttl"></a>

```go
func Ttl() *f64
```

- *Type:* *f64

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DnsResponsePolicyRuleLocalDataOutputReference <a name="DnsResponsePolicyRuleLocalDataOutputReference" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dnsresponsepolicyrule"

dnsresponsepolicyrule.NewDnsResponsePolicyRuleLocalDataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsResponsePolicyRuleLocalDataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.putLocalDatas">PutLocalDatas</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocalDatas` <a name="PutLocalDatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.putLocalDatas"></a>

```go
func PutLocalDatas(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.putLocalDatas.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.localDatas">LocalDatas</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList">DnsResponsePolicyRuleLocalDataLocalDatasList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.localDatasInput">LocalDatasInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LocalDatas`<sup>Required</sup> <a name="LocalDatas" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.localDatas"></a>

```go
func LocalDatas() DnsResponsePolicyRuleLocalDataLocalDatasList
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataLocalDatasList">DnsResponsePolicyRuleLocalDataLocalDatasList</a>

---

##### `LocalDatasInput`<sup>Optional</sup> <a name="LocalDatasInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.localDatasInput"></a>

```go
func LocalDatasInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalDataOutputReference.property.internalValue"></a>

```go
func InternalValue() DnsResponsePolicyRuleLocalData
```

- *Type:* <a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleLocalData">DnsResponsePolicyRuleLocalData</a>

---


### DnsResponsePolicyRuleTimeoutsOutputReference <a name="DnsResponsePolicyRuleTimeoutsOutputReference" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/v16/dnsresponsepolicyrule"

dnsresponsepolicyrule.NewDnsResponsePolicyRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DnsResponsePolicyRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.dnsResponsePolicyRule.DnsResponsePolicyRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



