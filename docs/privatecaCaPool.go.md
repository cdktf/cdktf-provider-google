# `privatecaCaPool` Submodule <a name="`privatecaCaPool` Submodule" id="@cdktf/provider-google.privatecaCaPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PrivatecaCaPool <a name="PrivatecaCaPool" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool google_privateca_ca_pool}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPool(scope Construct, id *string, config PrivatecaCaPoolConfig) PrivatecaCaPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig">PrivatecaCaPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig">PrivatecaCaPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putIssuancePolicy">PutIssuancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putPublishingOptions">PutPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetIssuancePolicy">ResetIssuancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetProject">ResetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetPublishingOptions">ResetPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutIssuancePolicy` <a name="PutIssuancePolicy" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putIssuancePolicy"></a>

```go
func PutIssuancePolicy(value PrivatecaCaPoolIssuancePolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putIssuancePolicy.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a>

---

##### `PutPublishingOptions` <a name="PutPublishingOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putPublishingOptions"></a>

```go
func PutPublishingOptions(value PrivatecaCaPoolPublishingOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putPublishingOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putTimeouts"></a>

```go
func PutTimeouts(value PrivatecaCaPoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts">PrivatecaCaPoolTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetId"></a>

```go
func ResetId()
```

##### `ResetIssuancePolicy` <a name="ResetIssuancePolicy" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetIssuancePolicy"></a>

```go
func ResetIssuancePolicy()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetProject` <a name="ResetProject" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetProject"></a>

```go
func ResetProject()
```

##### `ResetPublishingOptions` <a name="ResetPublishingOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetPublishingOptions"></a>

```go
func ResetPublishingOptions()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.PrivatecaCaPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.PrivatecaCaPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.PrivatecaCaPool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.issuancePolicy">IssuancePolicy</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference">PrivatecaCaPoolIssuancePolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.publishingOptions">PublishingOptions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference">PrivatecaCaPoolPublishingOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference">PrivatecaCaPoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.issuancePolicyInput">IssuancePolicyInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.projectInput">ProjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.publishingOptionsInput">PublishingOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.project">Project</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IssuancePolicy`<sup>Required</sup> <a name="IssuancePolicy" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.issuancePolicy"></a>

```go
func IssuancePolicy() PrivatecaCaPoolIssuancePolicyOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference">PrivatecaCaPoolIssuancePolicyOutputReference</a>

---

##### `PublishingOptions`<sup>Required</sup> <a name="PublishingOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.publishingOptions"></a>

```go
func PublishingOptions() PrivatecaCaPoolPublishingOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference">PrivatecaCaPoolPublishingOptionsOutputReference</a>

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.timeouts"></a>

```go
func Timeouts() PrivatecaCaPoolTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference">PrivatecaCaPoolTimeoutsOutputReference</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IssuancePolicyInput`<sup>Optional</sup> <a name="IssuancePolicyInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.issuancePolicyInput"></a>

```go
func IssuancePolicyInput() PrivatecaCaPoolIssuancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a>

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ProjectInput`<sup>Optional</sup> <a name="ProjectInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.projectInput"></a>

```go
func ProjectInput() *string
```

- *Type:* *string

---

##### `PublishingOptionsInput`<sup>Optional</sup> <a name="PublishingOptionsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.publishingOptionsInput"></a>

```go
func PublishingOptionsInput() PrivatecaCaPoolPublishingOptions
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a>

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Project`<sup>Required</sup> <a name="Project" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.project"></a>

```go
func Project() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PrivatecaCaPoolConfig <a name="PrivatecaCaPoolConfig" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Location: *string,
	Name: *string,
	Tier: *string,
	Id: *string,
	IssuancePolicy: github.com/cdktf/cdktf-provider-google-go/google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy,
	Labels: *map[string]*string,
	Project: *string,
	PublishingOptions: github.com/cdktf/cdktf-provider-google-go/google.privatecaCaPool.PrivatecaCaPoolPublishingOptions,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.privatecaCaPool.PrivatecaCaPoolTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.location">Location</a></code> | <code>*string</code> | Location of the CaPool. A full list of valid locations can be found by running 'gcloud privateca locations list'. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.name">Name</a></code> | <code>*string</code> | The name for this CaPool. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.tier">Tier</a></code> | <code>*string</code> | The Tier of this CaPool. Possible values: ["ENTERPRISE", "DEVOPS"]. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#id PrivatecaCaPool#id}. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.issuancePolicy">IssuancePolicy</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a></code> | issuance_policy block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | Labels with user-defined metadata. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.project">Project</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#project PrivatecaCaPool#project}. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.publishingOptions">PublishingOptions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a></code> | publishing_options block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts">PrivatecaCaPoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

Location of the CaPool. A full list of valid locations can be found by running 'gcloud privateca locations list'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#location PrivatecaCaPool#location}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for this CaPool.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#name PrivatecaCaPool#name}

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

The Tier of this CaPool. Possible values: ["ENTERPRISE", "DEVOPS"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#tier PrivatecaCaPool#tier}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#id PrivatecaCaPool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IssuancePolicy`<sup>Optional</sup> <a name="IssuancePolicy" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.issuancePolicy"></a>

```go
IssuancePolicy PrivatecaCaPoolIssuancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a>

issuance_policy block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#issuance_policy PrivatecaCaPool#issuance_policy}

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

Labels with user-defined metadata.

An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass":
"1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#labels PrivatecaCaPool#labels}

---

##### `Project`<sup>Optional</sup> <a name="Project" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.project"></a>

```go
Project *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#project PrivatecaCaPool#project}.

---

##### `PublishingOptions`<sup>Optional</sup> <a name="PublishingOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.publishingOptions"></a>

```go
PublishingOptions PrivatecaCaPoolPublishingOptions
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a>

publishing_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#publishing_options PrivatecaCaPool#publishing_options}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolConfig.property.timeouts"></a>

```go
Timeouts PrivatecaCaPoolTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts">PrivatecaCaPoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#timeouts PrivatecaCaPool#timeouts}

---

### PrivatecaCaPoolIssuancePolicy <a name="PrivatecaCaPoolIssuancePolicy" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolIssuancePolicy {
	AllowedIssuanceModes: github.com/cdktf/cdktf-provider-google-go/google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes,
	AllowedKeyTypes: interface{},
	BaselineValues: github.com/cdktf/cdktf-provider-google-go/google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues,
	IdentityConstraints: github.com/cdktf/cdktf-provider-google-go/google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints,
	MaximumLifetime: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.allowedIssuanceModes">AllowedIssuanceModes</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a></code> | allowed_issuance_modes block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.allowedKeyTypes">AllowedKeyTypes</a></code> | <code>interface{}</code> | allowed_key_types block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.baselineValues">BaselineValues</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a></code> | baseline_values block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.identityConstraints">IdentityConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a></code> | identity_constraints block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.maximumLifetime">MaximumLifetime</a></code> | <code>*string</code> | The maximum lifetime allowed for issued Certificates. |

---

##### `AllowedIssuanceModes`<sup>Optional</sup> <a name="AllowedIssuanceModes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.allowedIssuanceModes"></a>

```go
AllowedIssuanceModes PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

allowed_issuance_modes block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#allowed_issuance_modes PrivatecaCaPool#allowed_issuance_modes}

---

##### `AllowedKeyTypes`<sup>Optional</sup> <a name="AllowedKeyTypes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.allowedKeyTypes"></a>

```go
AllowedKeyTypes interface{}
```

- *Type:* interface{}

allowed_key_types block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#allowed_key_types PrivatecaCaPool#allowed_key_types}

---

##### `BaselineValues`<sup>Optional</sup> <a name="BaselineValues" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.baselineValues"></a>

```go
BaselineValues PrivatecaCaPoolIssuancePolicyBaselineValues
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a>

baseline_values block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#baseline_values PrivatecaCaPool#baseline_values}

---

##### `IdentityConstraints`<sup>Optional</sup> <a name="IdentityConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.identityConstraints"></a>

```go
IdentityConstraints PrivatecaCaPoolIssuancePolicyIdentityConstraints
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

identity_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#identity_constraints PrivatecaCaPool#identity_constraints}

---

##### `MaximumLifetime`<sup>Optional</sup> <a name="MaximumLifetime" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy.property.maximumLifetime"></a>

```go
MaximumLifetime *string
```

- *Type:* *string

The maximum lifetime allowed for issued Certificates.

Note that if the issuing CertificateAuthority
expires before a Certificate's requested maximumLifetime, the effective lifetime will be explicitly truncated to match it.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#maximum_lifetime PrivatecaCaPool#maximum_lifetime}

---

### PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes <a name="PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes {
	AllowConfigBasedIssuance: interface{},
	AllowCsrBasedIssuance: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowConfigBasedIssuance">AllowConfigBasedIssuance</a></code> | <code>interface{}</code> | When true, allows callers to create Certificates by specifying a CertificateConfig. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowCsrBasedIssuance">AllowCsrBasedIssuance</a></code> | <code>interface{}</code> | When true, allows callers to create Certificates by specifying a CSR. |

---

##### `AllowConfigBasedIssuance`<sup>Required</sup> <a name="AllowConfigBasedIssuance" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowConfigBasedIssuance"></a>

```go
AllowConfigBasedIssuance interface{}
```

- *Type:* interface{}

When true, allows callers to create Certificates by specifying a CertificateConfig.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#allow_config_based_issuance PrivatecaCaPool#allow_config_based_issuance}

---

##### `AllowCsrBasedIssuance`<sup>Required</sup> <a name="AllowCsrBasedIssuance" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes.property.allowCsrBasedIssuance"></a>

```go
AllowCsrBasedIssuance interface{}
```

- *Type:* interface{}

When true, allows callers to create Certificates by specifying a CSR.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#allow_csr_based_issuance PrivatecaCaPool#allow_csr_based_issuance}

---

### PrivatecaCaPoolIssuancePolicyAllowedKeyTypes <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes {
	EllipticCurve: github.com/cdktf/cdktf-provider-google-go/google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve,
	Rsa: github.com/cdktf/cdktf-provider-google-go/google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.ellipticCurve">EllipticCurve</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a></code> | elliptic_curve block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.rsa">Rsa</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a></code> | rsa block. |

---

##### `EllipticCurve`<sup>Optional</sup> <a name="EllipticCurve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.ellipticCurve"></a>

```go
EllipticCurve PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

elliptic_curve block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#elliptic_curve PrivatecaCaPool#elliptic_curve}

---

##### `Rsa`<sup>Optional</sup> <a name="Rsa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypes.property.rsa"></a>

```go
Rsa PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

rsa block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#rsa PrivatecaCaPool#rsa}

---

### PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve {
	SignatureAlgorithm: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>*string</code> | The algorithm used. Possible values: ["ECDSA_P256", "ECDSA_P384", "EDDSA_25519"]. |

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve.property.signatureAlgorithm"></a>

```go
SignatureAlgorithm *string
```

- *Type:* *string

The algorithm used. Possible values: ["ECDSA_P256", "ECDSA_P384", "EDDSA_25519"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#signature_algorithm PrivatecaCaPool#signature_algorithm}

---

### PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa {
	MaxModulusSize: *string,
	MinModulusSize: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.maxModulusSize">MaxModulusSize</a></code> | <code>*string</code> | The maximum allowed RSA modulus size, in bits. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.minModulusSize">MinModulusSize</a></code> | <code>*string</code> | The minimum allowed RSA modulus size, in bits. |

---

##### `MaxModulusSize`<sup>Optional</sup> <a name="MaxModulusSize" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.maxModulusSize"></a>

```go
MaxModulusSize *string
```

- *Type:* *string

The maximum allowed RSA modulus size, in bits.

If this is not set, or if set to zero, the
service will not enforce an explicit upper bound on RSA modulus sizes.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#max_modulus_size PrivatecaCaPool#max_modulus_size}

---

##### `MinModulusSize`<sup>Optional</sup> <a name="MinModulusSize" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa.property.minModulusSize"></a>

```go
MinModulusSize *string
```

- *Type:* *string

The minimum allowed RSA modulus size, in bits.

If this is not set, or if set to zero, the
service-level min RSA modulus size will continue to apply.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#min_modulus_size PrivatecaCaPool#min_modulus_size}

---

### PrivatecaCaPoolIssuancePolicyBaselineValues <a name="PrivatecaCaPoolIssuancePolicyBaselineValues" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolIssuancePolicyBaselineValues {
	CaOptions: github.com/cdktf/cdktf-provider-google-go/google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions,
	KeyUsage: github.com/cdktf/cdktf-provider-google-go/google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage,
	AdditionalExtensions: interface{},
	AiaOcspServers: *[]*string,
	NameConstraints: github.com/cdktf/cdktf-provider-google-go/google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints,
	PolicyIds: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.caOptions">CaOptions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a></code> | ca_options block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.keyUsage">KeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a></code> | key_usage block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.additionalExtensions">AdditionalExtensions</a></code> | <code>interface{}</code> | additional_extensions block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.aiaOcspServers">AiaOcspServers</a></code> | <code>*[]*string</code> | Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.nameConstraints">NameConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a></code> | name_constraints block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.policyIds">PolicyIds</a></code> | <code>interface{}</code> | policy_ids block. |

---

##### `CaOptions`<sup>Required</sup> <a name="CaOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.caOptions"></a>

```go
CaOptions PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

ca_options block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#ca_options PrivatecaCaPool#ca_options}

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.keyUsage"></a>

```go
KeyUsage PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

key_usage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#key_usage PrivatecaCaPool#key_usage}

---

##### `AdditionalExtensions`<sup>Optional</sup> <a name="AdditionalExtensions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.additionalExtensions"></a>

```go
AdditionalExtensions interface{}
```

- *Type:* interface{}

additional_extensions block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#additional_extensions PrivatecaCaPool#additional_extensions}

---

##### `AiaOcspServers`<sup>Optional</sup> <a name="AiaOcspServers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.aiaOcspServers"></a>

```go
AiaOcspServers *[]*string
```

- *Type:* *[]*string

Describes Online Certificate Status Protocol (OCSP) endpoint addresses that appear in the "Authority Information Access" extension in the certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#aia_ocsp_servers PrivatecaCaPool#aia_ocsp_servers}

---

##### `NameConstraints`<sup>Optional</sup> <a name="NameConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.nameConstraints"></a>

```go
NameConstraints PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

name_constraints block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#name_constraints PrivatecaCaPool#name_constraints}

---

##### `PolicyIds`<sup>Optional</sup> <a name="PolicyIds" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues.property.policyIds"></a>

```go
PolicyIds interface{}
```

- *Type:* interface{}

policy_ids block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#policy_ids PrivatecaCaPool#policy_ids}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions {
	Critical: interface{},
	ObjectId: github.com/cdktf/cdktf-provider-google-go/google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.critical">Critical</a></code> | <code>interface{}</code> | Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error). |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.objectId">ObjectId</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a></code> | object_id block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.value">Value</a></code> | <code>*string</code> | The value of this X.509 extension. A base64-encoded string. |

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.critical"></a>

```go
Critical interface{}
```

- *Type:* interface{}

Indicates whether or not this extension is critical (i.e., if the client does not know how to handle this extension, the client should consider this to be an error).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#critical PrivatecaCaPool#critical}

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.objectId"></a>

```go
ObjectId PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

object_id block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#object_id PrivatecaCaPool#object_id}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensions.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of this X.509 extension. A base64-encoded string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#value PrivatecaCaPool#value}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId {
	ObjectIdPath: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId.property.objectIdPath">ObjectIdPath</a></code> | <code>*[]*f64</code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId.property.objectIdPath"></a>

```go
ObjectIdPath *[]*f64
```

- *Type:* *[]*f64

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#object_id_path PrivatecaCaPool#object_id_path}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions {
	IsCa: interface{},
	MaxIssuerPathLength: *f64,
	NonCa: interface{},
	ZeroMaxIssuerPathLength: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.isCa">IsCa</a></code> | <code>interface{}</code> | When true, the "CA" in Basic Constraints extension will be set to true. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.maxIssuerPathLength">MaxIssuerPathLength</a></code> | <code>*f64</code> | Refers to the "path length constraint" in Basic Constraints extension. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.nonCa">NonCa</a></code> | <code>interface{}</code> | When true, the "CA" in Basic Constraints extension will be set to false. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.zeroMaxIssuerPathLength">ZeroMaxIssuerPathLength</a></code> | <code>interface{}</code> | When true, the "path length constraint" in Basic Constraints extension will be set to 0. |

---

##### `IsCa`<sup>Optional</sup> <a name="IsCa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.isCa"></a>

```go
IsCa interface{}
```

- *Type:* interface{}

When true, the "CA" in Basic Constraints extension will be set to true.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#is_ca PrivatecaCaPool#is_ca}

---

##### `MaxIssuerPathLength`<sup>Optional</sup> <a name="MaxIssuerPathLength" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.maxIssuerPathLength"></a>

```go
MaxIssuerPathLength *f64
```

- *Type:* *f64

Refers to the "path length constraint" in Basic Constraints extension.

For a CA certificate, this value describes the depth of
subordinate CA certificates that are allowed. If this value is less than 0, the request will fail.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#max_issuer_path_length PrivatecaCaPool#max_issuer_path_length}

---

##### `NonCa`<sup>Optional</sup> <a name="NonCa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.nonCa"></a>

```go
NonCa interface{}
```

- *Type:* interface{}

When true, the "CA" in Basic Constraints extension will be set to false.

If both 'is_ca' and 'non_ca' are unset, the extension will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#non_ca PrivatecaCaPool#non_ca}

---

##### `ZeroMaxIssuerPathLength`<sup>Optional</sup> <a name="ZeroMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions.property.zeroMaxIssuerPathLength"></a>

```go
ZeroMaxIssuerPathLength interface{}
```

- *Type:* interface{}

When true, the "path length constraint" in Basic Constraints extension will be set to 0.

if both 'max_issuer_path_length' and 'zero_max_issuer_path_length' are unset,
the max path length will be omitted from the CA certificate.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#zero_max_issuer_path_length PrivatecaCaPool#zero_max_issuer_path_length}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage {
	BaseKeyUsage: github.com/cdktf/cdktf-provider-google-go/google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage,
	ExtendedKeyUsage: github.com/cdktf/cdktf-provider-google-go/google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage,
	UnknownExtendedKeyUsages: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.baseKeyUsage">BaseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a></code> | base_key_usage block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a></code> | extended_key_usage block. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.unknownExtendedKeyUsages">UnknownExtendedKeyUsages</a></code> | <code>interface{}</code> | unknown_extended_key_usages block. |

---

##### `BaseKeyUsage`<sup>Required</sup> <a name="BaseKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.baseKeyUsage"></a>

```go
BaseKeyUsage PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

base_key_usage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#base_key_usage PrivatecaCaPool#base_key_usage}

---

##### `ExtendedKeyUsage`<sup>Required</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.extendedKeyUsage"></a>

```go
ExtendedKeyUsage PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

extended_key_usage block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#extended_key_usage PrivatecaCaPool#extended_key_usage}

---

##### `UnknownExtendedKeyUsages`<sup>Optional</sup> <a name="UnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage.property.unknownExtendedKeyUsages"></a>

```go
UnknownExtendedKeyUsages interface{}
```

- *Type:* interface{}

unknown_extended_key_usages block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#unknown_extended_key_usages PrivatecaCaPool#unknown_extended_key_usages}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage {
	CertSign: interface{},
	ContentCommitment: interface{},
	CrlSign: interface{},
	DataEncipherment: interface{},
	DecipherOnly: interface{},
	DigitalSignature: interface{},
	EncipherOnly: interface{},
	KeyAgreement: interface{},
	KeyEncipherment: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.certSign">CertSign</a></code> | <code>interface{}</code> | The key may be used to sign certificates. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.contentCommitment">ContentCommitment</a></code> | <code>interface{}</code> | The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation". |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.crlSign">CrlSign</a></code> | <code>interface{}</code> | The key may be used sign certificate revocation lists. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.dataEncipherment">DataEncipherment</a></code> | <code>interface{}</code> | The key may be used to encipher data. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.decipherOnly">DecipherOnly</a></code> | <code>interface{}</code> | The key may be used to decipher only. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.digitalSignature">DigitalSignature</a></code> | <code>interface{}</code> | The key may be used for digital signatures. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.encipherOnly">EncipherOnly</a></code> | <code>interface{}</code> | The key may be used to encipher only. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyAgreement">KeyAgreement</a></code> | <code>interface{}</code> | The key may be used in a key agreement protocol. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyEncipherment">KeyEncipherment</a></code> | <code>interface{}</code> | The key may be used to encipher other keys. |

---

##### `CertSign`<sup>Optional</sup> <a name="CertSign" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.certSign"></a>

```go
CertSign interface{}
```

- *Type:* interface{}

The key may be used to sign certificates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#cert_sign PrivatecaCaPool#cert_sign}

---

##### `ContentCommitment`<sup>Optional</sup> <a name="ContentCommitment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.contentCommitment"></a>

```go
ContentCommitment interface{}
```

- *Type:* interface{}

The key may be used for cryptographic commitments. Note that this may also be referred to as "non-repudiation".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#content_commitment PrivatecaCaPool#content_commitment}

---

##### `CrlSign`<sup>Optional</sup> <a name="CrlSign" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.crlSign"></a>

```go
CrlSign interface{}
```

- *Type:* interface{}

The key may be used sign certificate revocation lists.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#crl_sign PrivatecaCaPool#crl_sign}

---

##### `DataEncipherment`<sup>Optional</sup> <a name="DataEncipherment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.dataEncipherment"></a>

```go
DataEncipherment interface{}
```

- *Type:* interface{}

The key may be used to encipher data.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#data_encipherment PrivatecaCaPool#data_encipherment}

---

##### `DecipherOnly`<sup>Optional</sup> <a name="DecipherOnly" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.decipherOnly"></a>

```go
DecipherOnly interface{}
```

- *Type:* interface{}

The key may be used to decipher only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#decipher_only PrivatecaCaPool#decipher_only}

---

##### `DigitalSignature`<sup>Optional</sup> <a name="DigitalSignature" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.digitalSignature"></a>

```go
DigitalSignature interface{}
```

- *Type:* interface{}

The key may be used for digital signatures.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#digital_signature PrivatecaCaPool#digital_signature}

---

##### `EncipherOnly`<sup>Optional</sup> <a name="EncipherOnly" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.encipherOnly"></a>

```go
EncipherOnly interface{}
```

- *Type:* interface{}

The key may be used to encipher only.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#encipher_only PrivatecaCaPool#encipher_only}

---

##### `KeyAgreement`<sup>Optional</sup> <a name="KeyAgreement" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyAgreement"></a>

```go
KeyAgreement interface{}
```

- *Type:* interface{}

The key may be used in a key agreement protocol.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#key_agreement PrivatecaCaPool#key_agreement}

---

##### `KeyEncipherment`<sup>Optional</sup> <a name="KeyEncipherment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage.property.keyEncipherment"></a>

```go
KeyEncipherment interface{}
```

- *Type:* interface{}

The key may be used to encipher other keys.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#key_encipherment PrivatecaCaPool#key_encipherment}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage {
	ClientAuth: interface{},
	CodeSigning: interface{},
	EmailProtection: interface{},
	OcspSigning: interface{},
	ServerAuth: interface{},
	TimeStamping: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.clientAuth">ClientAuth</a></code> | <code>interface{}</code> | Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.codeSigning">CodeSigning</a></code> | <code>interface{}</code> | Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication". |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.emailProtection">EmailProtection</a></code> | <code>interface{}</code> | Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection". |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.ocspSigning">OcspSigning</a></code> | <code>interface{}</code> | Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses". |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.serverAuth">ServerAuth</a></code> | <code>interface{}</code> | Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.timeStamping">TimeStamping</a></code> | <code>interface{}</code> | Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time". |

---

##### `ClientAuth`<sup>Optional</sup> <a name="ClientAuth" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.clientAuth"></a>

```go
ClientAuth interface{}
```

- *Type:* interface{}

Corresponds to OID 1.3.6.1.5.5.7.3.2. Officially described as "TLS WWW client authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#client_auth PrivatecaCaPool#client_auth}

---

##### `CodeSigning`<sup>Optional</sup> <a name="CodeSigning" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.codeSigning"></a>

```go
CodeSigning interface{}
```

- *Type:* interface{}

Corresponds to OID 1.3.6.1.5.5.7.3.3. Officially described as "Signing of downloadable executable code client authentication".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#code_signing PrivatecaCaPool#code_signing}

---

##### `EmailProtection`<sup>Optional</sup> <a name="EmailProtection" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.emailProtection"></a>

```go
EmailProtection interface{}
```

- *Type:* interface{}

Corresponds to OID 1.3.6.1.5.5.7.3.4. Officially described as "Email protection".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#email_protection PrivatecaCaPool#email_protection}

---

##### `OcspSigning`<sup>Optional</sup> <a name="OcspSigning" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.ocspSigning"></a>

```go
OcspSigning interface{}
```

- *Type:* interface{}

Corresponds to OID 1.3.6.1.5.5.7.3.9. Officially described as "Signing OCSP responses".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#ocsp_signing PrivatecaCaPool#ocsp_signing}

---

##### `ServerAuth`<sup>Optional</sup> <a name="ServerAuth" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.serverAuth"></a>

```go
ServerAuth interface{}
```

- *Type:* interface{}

Corresponds to OID 1.3.6.1.5.5.7.3.1. Officially described as "TLS WWW server authentication", though regularly used for non-WWW TLS.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#server_auth PrivatecaCaPool#server_auth}

---

##### `TimeStamping`<sup>Optional</sup> <a name="TimeStamping" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage.property.timeStamping"></a>

```go
TimeStamping interface{}
```

- *Type:* interface{}

Corresponds to OID 1.3.6.1.5.5.7.3.8. Officially described as "Binding the hash of an object to a time".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#time_stamping PrivatecaCaPool#time_stamping}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages {
	ObjectIdPath: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages.property.objectIdPath">ObjectIdPath</a></code> | <code>*[]*f64</code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsages.property.objectIdPath"></a>

```go
ObjectIdPath *[]*f64
```

- *Type:* *[]*f64

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#object_id_path PrivatecaCaPool#object_id_path}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints {
	Critical: interface{},
	ExcludedDnsNames: *[]*string,
	ExcludedEmailAddresses: *[]*string,
	ExcludedIpRanges: *[]*string,
	ExcludedUris: *[]*string,
	PermittedDnsNames: *[]*string,
	PermittedEmailAddresses: *[]*string,
	PermittedIpRanges: *[]*string,
	PermittedUris: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.critical">Critical</a></code> | <code>interface{}</code> | Indicates whether or not the name constraints are marked critical. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedDnsNames">ExcludedDnsNames</a></code> | <code>*[]*string</code> | Contains excluded DNS names. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedEmailAddresses">ExcludedEmailAddresses</a></code> | <code>*[]*string</code> | Contains the excluded email addresses. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedIpRanges">ExcludedIpRanges</a></code> | <code>*[]*string</code> | Contains the excluded IP ranges. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedUris">ExcludedUris</a></code> | <code>*[]*string</code> | Contains the excluded URIs that apply to the host part of the name. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedDnsNames">PermittedDnsNames</a></code> | <code>*[]*string</code> | Contains permitted DNS names. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedEmailAddresses">PermittedEmailAddresses</a></code> | <code>*[]*string</code> | Contains the permitted email addresses. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedIpRanges">PermittedIpRanges</a></code> | <code>*[]*string</code> | Contains the permitted IP ranges. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedUris">PermittedUris</a></code> | <code>*[]*string</code> | Contains the permitted URIs that apply to the host part of the name. |

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.critical"></a>

```go
Critical interface{}
```

- *Type:* interface{}

Indicates whether or not the name constraints are marked critical.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#critical PrivatecaCaPool#critical}

---

##### `ExcludedDnsNames`<sup>Optional</sup> <a name="ExcludedDnsNames" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedDnsNames"></a>

```go
ExcludedDnsNames *[]*string
```

- *Type:* *[]*string

Contains excluded DNS names.

Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, 'example.com', 'www.example.com', 'www.sub.example.com'
would satisfy 'example.com' while 'example1.com' does not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#excluded_dns_names PrivatecaCaPool#excluded_dns_names}

---

##### `ExcludedEmailAddresses`<sup>Optional</sup> <a name="ExcludedEmailAddresses" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedEmailAddresses"></a>

```go
ExcludedEmailAddresses *[]*string
```

- *Type:* *[]*string

Contains the excluded email addresses.

The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. '.example.com') to indicate
all email addresses in that domain.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#excluded_email_addresses PrivatecaCaPool#excluded_email_addresses}

---

##### `ExcludedIpRanges`<sup>Optional</sup> <a name="ExcludedIpRanges" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedIpRanges"></a>

```go
ExcludedIpRanges *[]*string
```

- *Type:* *[]*string

Contains the excluded IP ranges.

For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#excluded_ip_ranges PrivatecaCaPool#excluded_ip_ranges}

---

##### `ExcludedUris`<sup>Optional</sup> <a name="ExcludedUris" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.excludedUris"></a>

```go
ExcludedUris *[]*string
```

- *Type:* *[]*string

Contains the excluded URIs that apply to the host part of the name.

The value can be a hostname or a domain with a
leading period (like '.example.com')

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#excluded_uris PrivatecaCaPool#excluded_uris}

---

##### `PermittedDnsNames`<sup>Optional</sup> <a name="PermittedDnsNames" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedDnsNames"></a>

```go
PermittedDnsNames *[]*string
```

- *Type:* *[]*string

Contains permitted DNS names.

Any DNS name that can be
constructed by simply adding zero or more labels to
the left-hand side of the name satisfies the name constraint.
For example, 'example.com', 'www.example.com', 'www.sub.example.com'
would satisfy 'example.com' while 'example1.com' does not.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#permitted_dns_names PrivatecaCaPool#permitted_dns_names}

---

##### `PermittedEmailAddresses`<sup>Optional</sup> <a name="PermittedEmailAddresses" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedEmailAddresses"></a>

```go
PermittedEmailAddresses *[]*string
```

- *Type:* *[]*string

Contains the permitted email addresses.

The value can be a particular
email address, a hostname to indicate all email addresses on that host or
a domain with a leading period (e.g. '.example.com') to indicate
all email addresses in that domain.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#permitted_email_addresses PrivatecaCaPool#permitted_email_addresses}

---

##### `PermittedIpRanges`<sup>Optional</sup> <a name="PermittedIpRanges" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedIpRanges"></a>

```go
PermittedIpRanges *[]*string
```

- *Type:* *[]*string

Contains the permitted IP ranges.

For IPv4 addresses, the ranges
are expressed using CIDR notation as specified in RFC 4632.
For IPv6 addresses, the ranges are expressed in similar encoding as IPv4
addresses.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#permitted_ip_ranges PrivatecaCaPool#permitted_ip_ranges}

---

##### `PermittedUris`<sup>Optional</sup> <a name="PermittedUris" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints.property.permittedUris"></a>

```go
PermittedUris *[]*string
```

- *Type:* *[]*string

Contains the permitted URIs that apply to the host part of the name.

The value can be a hostname or a domain with a
leading period (like '.example.com')

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#permitted_uris PrivatecaCaPool#permitted_uris}

---

### PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds {
	ObjectIdPath: *[]*f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds.property.objectIdPath">ObjectIdPath</a></code> | <code>*[]*f64</code> | An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages. |

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIds.property.objectIdPath"></a>

```go
ObjectIdPath *[]*f64
```

- *Type:* *[]*f64

An ObjectId specifies an object identifier (OID). These provide context and describe types in ASN.1 messages.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#object_id_path PrivatecaCaPool#object_id_path}

---

### PrivatecaCaPoolIssuancePolicyIdentityConstraints <a name="PrivatecaCaPoolIssuancePolicyIdentityConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolIssuancePolicyIdentityConstraints {
	AllowSubjectAltNamesPassthrough: interface{},
	AllowSubjectPassthrough: interface{},
	CelExpression: github.com/cdktf/cdktf-provider-google-go/google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectAltNamesPassthrough">AllowSubjectAltNamesPassthrough</a></code> | <code>interface{}</code> | If this is set, the SubjectAltNames extension may be copied from a certificate request into the signed certificate. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectPassthrough">AllowSubjectPassthrough</a></code> | <code>interface{}</code> | If this is set, the Subject field may be copied from a certificate request into the signed certificate. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.property.celExpression">CelExpression</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a></code> | cel_expression block. |

---

##### `AllowSubjectAltNamesPassthrough`<sup>Required</sup> <a name="AllowSubjectAltNamesPassthrough" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectAltNamesPassthrough"></a>

```go
AllowSubjectAltNamesPassthrough interface{}
```

- *Type:* interface{}

If this is set, the SubjectAltNames extension may be copied from a certificate request into the signed certificate.

Otherwise, the requested SubjectAltNames will be discarded.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#allow_subject_alt_names_passthrough PrivatecaCaPool#allow_subject_alt_names_passthrough}

---

##### `AllowSubjectPassthrough`<sup>Required</sup> <a name="AllowSubjectPassthrough" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.property.allowSubjectPassthrough"></a>

```go
AllowSubjectPassthrough interface{}
```

- *Type:* interface{}

If this is set, the Subject field may be copied from a certificate request into the signed certificate.

Otherwise, the requested Subject will be discarded.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#allow_subject_passthrough PrivatecaCaPool#allow_subject_passthrough}

---

##### `CelExpression`<sup>Optional</sup> <a name="CelExpression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints.property.celExpression"></a>

```go
CelExpression PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

cel_expression block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#cel_expression PrivatecaCaPool#cel_expression}

---

### PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression <a name="PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression {
	Expression: *string,
	Description: *string,
	Location: *string,
	Title: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.expression">Expression</a></code> | <code>*string</code> | Textual representation of an expression in Common Expression Language syntax. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.description">Description</a></code> | <code>*string</code> | Description of the expression. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.location">Location</a></code> | <code>*string</code> | String indicating the location of the expression for error reporting, e.g. a file name and a position in the file. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.title">Title</a></code> | <code>*string</code> | Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression. |

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.expression"></a>

```go
Expression *string
```

- *Type:* *string

Textual representation of an expression in Common Expression Language syntax.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#expression PrivatecaCaPool#expression}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the expression.

This is a longer text which describes the expression, e.g. when hovered over it in a UI.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#description PrivatecaCaPool#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.location"></a>

```go
Location *string
```

- *Type:* *string

String indicating the location of the expression for error reporting, e.g. a file name and a position in the file.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#location PrivatecaCaPool#location}

---

##### `Title`<sup>Optional</sup> <a name="Title" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression.property.title"></a>

```go
Title *string
```

- *Type:* *string

Title for the expression, i.e. a short string describing its purpose. This can be used e.g. in UIs which allow to enter the expression.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#title PrivatecaCaPool#title}

---

### PrivatecaCaPoolPublishingOptions <a name="PrivatecaCaPoolPublishingOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolPublishingOptions {
	PublishCaCert: interface{},
	PublishCrl: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions.property.publishCaCert">PublishCaCert</a></code> | <code>interface{}</code> | When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access" X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding X.509 extension will not be written in issued certificates. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions.property.publishCrl">PublishCrl</a></code> | <code>interface{}</code> | When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked. |

---

##### `PublishCaCert`<sup>Required</sup> <a name="PublishCaCert" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions.property.publishCaCert"></a>

```go
PublishCaCert interface{}
```

- *Type:* interface{}

When true, publishes each CertificateAuthority's CA certificate and includes its URL in the "Authority Information Access" X.509 extension in all issued Certificates. If this is false, the CA certificate will not be published and the corresponding X.509 extension will not be written in issued certificates.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#publish_ca_cert PrivatecaCaPool#publish_ca_cert}

---

##### `PublishCrl`<sup>Required</sup> <a name="PublishCrl" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions.property.publishCrl"></a>

```go
PublishCrl interface{}
```

- *Type:* interface{}

When true, publishes each CertificateAuthority's CRL and includes its URL in the "CRL Distribution Points" X.509 extension in all issued Certificates. If this is false, CRLs will not be published and the corresponding X.509 extension will not be written in issued certificates. CRLs will expire 7 days from their creation. However, we will rebuild daily. CRLs are also rebuilt shortly after a certificate is revoked.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#publish_crl PrivatecaCaPool#publish_crl}

---

### PrivatecaCaPoolTimeouts <a name="PrivatecaCaPoolTimeouts" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

&privatecacapool.PrivatecaCaPoolTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#create PrivatecaCaPool#create}. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#delete PrivatecaCaPool#delete}. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#update PrivatecaCaPool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#create PrivatecaCaPool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#delete PrivatecaCaPool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/privateca_ca_pool#update PrivatecaCaPool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference <a name="PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuanceInput">AllowConfigBasedIssuanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuanceInput">AllowCsrBasedIssuanceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuance">AllowConfigBasedIssuance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuance">AllowCsrBasedIssuance</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowConfigBasedIssuanceInput`<sup>Optional</sup> <a name="AllowConfigBasedIssuanceInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuanceInput"></a>

```go
func AllowConfigBasedIssuanceInput() interface{}
```

- *Type:* interface{}

---

##### `AllowCsrBasedIssuanceInput`<sup>Optional</sup> <a name="AllowCsrBasedIssuanceInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuanceInput"></a>

```go
func AllowCsrBasedIssuanceInput() interface{}
```

- *Type:* interface{}

---

##### `AllowConfigBasedIssuance`<sup>Required</sup> <a name="AllowConfigBasedIssuance" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowConfigBasedIssuance"></a>

```go
func AllowConfigBasedIssuance() interface{}
```

- *Type:* interface{}

---

##### `AllowCsrBasedIssuance`<sup>Required</sup> <a name="AllowCsrBasedIssuance" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.allowCsrBasedIssuance"></a>

```go
func AllowCsrBasedIssuance() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

---


### PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithmInput">SignatureAlgorithmInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithm">SignatureAlgorithm</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SignatureAlgorithmInput`<sup>Optional</sup> <a name="SignatureAlgorithmInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithmInput"></a>

```go
func SignatureAlgorithmInput() *string
```

- *Type:* *string

---

##### `SignatureAlgorithm`<sup>Required</sup> <a name="SignatureAlgorithm" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.signatureAlgorithm"></a>

```go
func SignatureAlgorithm() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

---


### PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyAllowedKeyTypesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.get"></a>

```go
func Get(index *f64) PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putEllipticCurve">PutEllipticCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putRsa">PutRsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetEllipticCurve">ResetEllipticCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetRsa">ResetRsa</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEllipticCurve` <a name="PutEllipticCurve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putEllipticCurve"></a>

```go
func PutEllipticCurve(value PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putEllipticCurve.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

---

##### `PutRsa` <a name="PutRsa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putRsa"></a>

```go
func PutRsa(value PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.putRsa.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

---

##### `ResetEllipticCurve` <a name="ResetEllipticCurve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetEllipticCurve"></a>

```go
func ResetEllipticCurve()
```

##### `ResetRsa` <a name="ResetRsa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.resetRsa"></a>

```go
func ResetRsa()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurve">EllipticCurve</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsa">Rsa</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurveInput">EllipticCurveInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsaInput">RsaInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EllipticCurve`<sup>Required</sup> <a name="EllipticCurve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurve"></a>

```go
func EllipticCurve() PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurveOutputReference</a>

---

##### `Rsa`<sup>Required</sup> <a name="Rsa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsa"></a>

```go
func Rsa() PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference</a>

---

##### `EllipticCurveInput`<sup>Optional</sup> <a name="EllipticCurveInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.ellipticCurveInput"></a>

```go
func EllipticCurveInput() PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesEllipticCurve</a>

---

##### `RsaInput`<sup>Optional</sup> <a name="RsaInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.rsaInput"></a>

```go
func RsaInput() PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference <a name="PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMaxModulusSize">ResetMaxModulusSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMinModulusSize">ResetMinModulusSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxModulusSize` <a name="ResetMaxModulusSize" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMaxModulusSize"></a>

```go
func ResetMaxModulusSize()
```

##### `ResetMinModulusSize` <a name="ResetMinModulusSize" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.resetMinModulusSize"></a>

```go
func ResetMinModulusSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSizeInput">MaxModulusSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSizeInput">MinModulusSizeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSize">MaxModulusSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSize">MinModulusSize</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MaxModulusSizeInput`<sup>Optional</sup> <a name="MaxModulusSizeInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSizeInput"></a>

```go
func MaxModulusSizeInput() *string
```

- *Type:* *string

---

##### `MinModulusSizeInput`<sup>Optional</sup> <a name="MinModulusSizeInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSizeInput"></a>

```go
func MinModulusSizeInput() *string
```

- *Type:* *string

---

##### `MaxModulusSize`<sup>Required</sup> <a name="MaxModulusSize" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.maxModulusSize"></a>

```go
func MaxModulusSize() *string
```

- *Type:* *string

---

##### `MinModulusSize`<sup>Required</sup> <a name="MinModulusSize" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.minModulusSize"></a>

```go
func MinModulusSize() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsaOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesRsa</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.get"></a>

```go
func Get(index *f64) PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput">ObjectIdPathInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPath">ObjectIdPath</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectIdPathInput`<sup>Optional</sup> <a name="ObjectIdPathInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPathInput"></a>

```go
func ObjectIdPathInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.objectIdPath"></a>

```go
func ObjectIdPath() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.putObjectId">PutObjectId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutObjectId` <a name="PutObjectId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.putObjectId"></a>

```go
func PutObjectId(value PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.putObjectId.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectId">ObjectId</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.criticalInput">CriticalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectIdInput">ObjectIdInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.critical">Critical</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectId`<sup>Required</sup> <a name="ObjectId" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectId"></a>

```go
func ObjectId() PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectIdOutputReference</a>

---

##### `CriticalInput`<sup>Optional</sup> <a name="CriticalInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.criticalInput"></a>

```go
func CriticalInput() interface{}
```

- *Type:* interface{}

---

##### `ObjectIdInput`<sup>Optional</sup> <a name="ObjectIdInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.objectIdInput"></a>

```go
func ObjectIdInput() PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsObjectId</a>

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.critical"></a>

```go
func Critical() interface{}
```

- *Type:* interface{}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetIsCa">ResetIsCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetMaxIssuerPathLength">ResetMaxIssuerPathLength</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetNonCa">ResetNonCa</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetZeroMaxIssuerPathLength">ResetZeroMaxIssuerPathLength</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsCa` <a name="ResetIsCa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetIsCa"></a>

```go
func ResetIsCa()
```

##### `ResetMaxIssuerPathLength` <a name="ResetMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetMaxIssuerPathLength"></a>

```go
func ResetMaxIssuerPathLength()
```

##### `ResetNonCa` <a name="ResetNonCa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetNonCa"></a>

```go
func ResetNonCa()
```

##### `ResetZeroMaxIssuerPathLength` <a name="ResetZeroMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.resetZeroMaxIssuerPathLength"></a>

```go
func ResetZeroMaxIssuerPathLength()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCaInput">IsCaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLengthInput">MaxIssuerPathLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCaInput">NonCaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLengthInput">ZeroMaxIssuerPathLengthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCa">IsCa</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLength">MaxIssuerPathLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCa">NonCa</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLength">ZeroMaxIssuerPathLength</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsCaInput`<sup>Optional</sup> <a name="IsCaInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCaInput"></a>

```go
func IsCaInput() interface{}
```

- *Type:* interface{}

---

##### `MaxIssuerPathLengthInput`<sup>Optional</sup> <a name="MaxIssuerPathLengthInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLengthInput"></a>

```go
func MaxIssuerPathLengthInput() *f64
```

- *Type:* *f64

---

##### `NonCaInput`<sup>Optional</sup> <a name="NonCaInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCaInput"></a>

```go
func NonCaInput() interface{}
```

- *Type:* interface{}

---

##### `ZeroMaxIssuerPathLengthInput`<sup>Optional</sup> <a name="ZeroMaxIssuerPathLengthInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLengthInput"></a>

```go
func ZeroMaxIssuerPathLengthInput() interface{}
```

- *Type:* interface{}

---

##### `IsCa`<sup>Required</sup> <a name="IsCa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.isCa"></a>

```go
func IsCa() interface{}
```

- *Type:* interface{}

---

##### `MaxIssuerPathLength`<sup>Required</sup> <a name="MaxIssuerPathLength" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.maxIssuerPathLength"></a>

```go
func MaxIssuerPathLength() *f64
```

- *Type:* *f64

---

##### `NonCa`<sup>Required</sup> <a name="NonCa" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.nonCa"></a>

```go
func NonCa() interface{}
```

- *Type:* interface{}

---

##### `ZeroMaxIssuerPathLength`<sup>Required</sup> <a name="ZeroMaxIssuerPathLength" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.zeroMaxIssuerPathLength"></a>

```go
func ZeroMaxIssuerPathLength() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCertSign">ResetCertSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetContentCommitment">ResetContentCommitment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCrlSign">ResetCrlSign</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment">ResetDataEncipherment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly">ResetDecipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature">ResetDigitalSignature</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly">ResetEncipherOnly</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement">ResetKeyAgreement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment">ResetKeyEncipherment</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertSign` <a name="ResetCertSign" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCertSign"></a>

```go
func ResetCertSign()
```

##### `ResetContentCommitment` <a name="ResetContentCommitment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetContentCommitment"></a>

```go
func ResetContentCommitment()
```

##### `ResetCrlSign` <a name="ResetCrlSign" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetCrlSign"></a>

```go
func ResetCrlSign()
```

##### `ResetDataEncipherment` <a name="ResetDataEncipherment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDataEncipherment"></a>

```go
func ResetDataEncipherment()
```

##### `ResetDecipherOnly` <a name="ResetDecipherOnly" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDecipherOnly"></a>

```go
func ResetDecipherOnly()
```

##### `ResetDigitalSignature` <a name="ResetDigitalSignature" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetDigitalSignature"></a>

```go
func ResetDigitalSignature()
```

##### `ResetEncipherOnly` <a name="ResetEncipherOnly" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetEncipherOnly"></a>

```go
func ResetEncipherOnly()
```

##### `ResetKeyAgreement` <a name="ResetKeyAgreement" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyAgreement"></a>

```go
func ResetKeyAgreement()
```

##### `ResetKeyEncipherment` <a name="ResetKeyEncipherment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.resetKeyEncipherment"></a>

```go
func ResetKeyEncipherment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSignInput">CertSignInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput">ContentCommitmentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSignInput">CrlSignInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput">DataEnciphermentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput">DecipherOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput">DigitalSignatureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput">EncipherOnlyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput">KeyAgreementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput">KeyEnciphermentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSign">CertSign</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitment">ContentCommitment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSign">CrlSign</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment">DataEncipherment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnly">DecipherOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignature">DigitalSignature</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnly">EncipherOnly</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreement">KeyAgreement</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment">KeyEncipherment</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertSignInput`<sup>Optional</sup> <a name="CertSignInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSignInput"></a>

```go
func CertSignInput() interface{}
```

- *Type:* interface{}

---

##### `ContentCommitmentInput`<sup>Optional</sup> <a name="ContentCommitmentInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitmentInput"></a>

```go
func ContentCommitmentInput() interface{}
```

- *Type:* interface{}

---

##### `CrlSignInput`<sup>Optional</sup> <a name="CrlSignInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSignInput"></a>

```go
func CrlSignInput() interface{}
```

- *Type:* interface{}

---

##### `DataEnciphermentInput`<sup>Optional</sup> <a name="DataEnciphermentInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEnciphermentInput"></a>

```go
func DataEnciphermentInput() interface{}
```

- *Type:* interface{}

---

##### `DecipherOnlyInput`<sup>Optional</sup> <a name="DecipherOnlyInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnlyInput"></a>

```go
func DecipherOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `DigitalSignatureInput`<sup>Optional</sup> <a name="DigitalSignatureInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignatureInput"></a>

```go
func DigitalSignatureInput() interface{}
```

- *Type:* interface{}

---

##### `EncipherOnlyInput`<sup>Optional</sup> <a name="EncipherOnlyInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnlyInput"></a>

```go
func EncipherOnlyInput() interface{}
```

- *Type:* interface{}

---

##### `KeyAgreementInput`<sup>Optional</sup> <a name="KeyAgreementInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreementInput"></a>

```go
func KeyAgreementInput() interface{}
```

- *Type:* interface{}

---

##### `KeyEnciphermentInput`<sup>Optional</sup> <a name="KeyEnciphermentInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEnciphermentInput"></a>

```go
func KeyEnciphermentInput() interface{}
```

- *Type:* interface{}

---

##### `CertSign`<sup>Required</sup> <a name="CertSign" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.certSign"></a>

```go
func CertSign() interface{}
```

- *Type:* interface{}

---

##### `ContentCommitment`<sup>Required</sup> <a name="ContentCommitment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.contentCommitment"></a>

```go
func ContentCommitment() interface{}
```

- *Type:* interface{}

---

##### `CrlSign`<sup>Required</sup> <a name="CrlSign" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.crlSign"></a>

```go
func CrlSign() interface{}
```

- *Type:* interface{}

---

##### `DataEncipherment`<sup>Required</sup> <a name="DataEncipherment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.dataEncipherment"></a>

```go
func DataEncipherment() interface{}
```

- *Type:* interface{}

---

##### `DecipherOnly`<sup>Required</sup> <a name="DecipherOnly" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.decipherOnly"></a>

```go
func DecipherOnly() interface{}
```

- *Type:* interface{}

---

##### `DigitalSignature`<sup>Required</sup> <a name="DigitalSignature" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.digitalSignature"></a>

```go
func DigitalSignature() interface{}
```

- *Type:* interface{}

---

##### `EncipherOnly`<sup>Required</sup> <a name="EncipherOnly" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.encipherOnly"></a>

```go
func EncipherOnly() interface{}
```

- *Type:* interface{}

---

##### `KeyAgreement`<sup>Required</sup> <a name="KeyAgreement" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyAgreement"></a>

```go
func KeyAgreement() interface{}
```

- *Type:* interface{}

---

##### `KeyEncipherment`<sup>Required</sup> <a name="KeyEncipherment" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.keyEncipherment"></a>

```go
func KeyEncipherment() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetClientAuth">ResetClientAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning">ResetCodeSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection">ResetEmailProtection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning">ResetOcspSigning</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetServerAuth">ResetServerAuth</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping">ResetTimeStamping</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientAuth` <a name="ResetClientAuth" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetClientAuth"></a>

```go
func ResetClientAuth()
```

##### `ResetCodeSigning` <a name="ResetCodeSigning" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetCodeSigning"></a>

```go
func ResetCodeSigning()
```

##### `ResetEmailProtection` <a name="ResetEmailProtection" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetEmailProtection"></a>

```go
func ResetEmailProtection()
```

##### `ResetOcspSigning` <a name="ResetOcspSigning" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetOcspSigning"></a>

```go
func ResetOcspSigning()
```

##### `ResetServerAuth` <a name="ResetServerAuth" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetServerAuth"></a>

```go
func ResetServerAuth()
```

##### `ResetTimeStamping` <a name="ResetTimeStamping" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.resetTimeStamping"></a>

```go
func ResetTimeStamping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput">ClientAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput">CodeSigningInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput">EmailProtectionInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput">OcspSigningInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput">ServerAuthInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput">TimeStampingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuth">ClientAuth</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigning">CodeSigning</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtection">EmailProtection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning">OcspSigning</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuth">ServerAuth</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStamping">TimeStamping</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientAuthInput`<sup>Optional</sup> <a name="ClientAuthInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuthInput"></a>

```go
func ClientAuthInput() interface{}
```

- *Type:* interface{}

---

##### `CodeSigningInput`<sup>Optional</sup> <a name="CodeSigningInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigningInput"></a>

```go
func CodeSigningInput() interface{}
```

- *Type:* interface{}

---

##### `EmailProtectionInput`<sup>Optional</sup> <a name="EmailProtectionInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtectionInput"></a>

```go
func EmailProtectionInput() interface{}
```

- *Type:* interface{}

---

##### `OcspSigningInput`<sup>Optional</sup> <a name="OcspSigningInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigningInput"></a>

```go
func OcspSigningInput() interface{}
```

- *Type:* interface{}

---

##### `ServerAuthInput`<sup>Optional</sup> <a name="ServerAuthInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuthInput"></a>

```go
func ServerAuthInput() interface{}
```

- *Type:* interface{}

---

##### `TimeStampingInput`<sup>Optional</sup> <a name="TimeStampingInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStampingInput"></a>

```go
func TimeStampingInput() interface{}
```

- *Type:* interface{}

---

##### `ClientAuth`<sup>Required</sup> <a name="ClientAuth" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.clientAuth"></a>

```go
func ClientAuth() interface{}
```

- *Type:* interface{}

---

##### `CodeSigning`<sup>Required</sup> <a name="CodeSigning" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.codeSigning"></a>

```go
func CodeSigning() interface{}
```

- *Type:* interface{}

---

##### `EmailProtection`<sup>Required</sup> <a name="EmailProtection" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.emailProtection"></a>

```go
func EmailProtection() interface{}
```

- *Type:* interface{}

---

##### `OcspSigning`<sup>Required</sup> <a name="OcspSigning" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.ocspSigning"></a>

```go
func OcspSigning() interface{}
```

- *Type:* interface{}

---

##### `ServerAuth`<sup>Required</sup> <a name="ServerAuth" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.serverAuth"></a>

```go
func ServerAuth() interface{}
```

- *Type:* interface{}

---

##### `TimeStamping`<sup>Required</sup> <a name="TimeStamping" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.timeStamping"></a>

```go
func TimeStamping() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putBaseKeyUsage">PutBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putExtendedKeyUsage">PutExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages">PutUnknownExtendedKeyUsages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resetUnknownExtendedKeyUsages">ResetUnknownExtendedKeyUsages</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBaseKeyUsage` <a name="PutBaseKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putBaseKeyUsage"></a>

```go
func PutBaseKeyUsage(value PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putBaseKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

---

##### `PutExtendedKeyUsage` <a name="PutExtendedKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putExtendedKeyUsage"></a>

```go
func PutExtendedKeyUsage(value PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putExtendedKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

---

##### `PutUnknownExtendedKeyUsages` <a name="PutUnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages"></a>

```go
func PutUnknownExtendedKeyUsages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.putUnknownExtendedKeyUsages.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetUnknownExtendedKeyUsages` <a name="ResetUnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.resetUnknownExtendedKeyUsages"></a>

```go
func ResetUnknownExtendedKeyUsages()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsage">BaseKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsage">ExtendedKeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsages">UnknownExtendedKeyUsages</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsageInput">BaseKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsageInput">ExtendedKeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput">UnknownExtendedKeyUsagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BaseKeyUsage`<sup>Required</sup> <a name="BaseKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsage"></a>

```go
func BaseKeyUsage() PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsageOutputReference</a>

---

##### `ExtendedKeyUsage`<sup>Required</sup> <a name="ExtendedKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsage"></a>

```go
func ExtendedKeyUsage() PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsageOutputReference</a>

---

##### `UnknownExtendedKeyUsages`<sup>Required</sup> <a name="UnknownExtendedKeyUsages" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsages"></a>

```go
func UnknownExtendedKeyUsages() PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList</a>

---

##### `BaseKeyUsageInput`<sup>Optional</sup> <a name="BaseKeyUsageInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.baseKeyUsageInput"></a>

```go
func BaseKeyUsageInput() PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageBaseKeyUsage</a>

---

##### `ExtendedKeyUsageInput`<sup>Optional</sup> <a name="ExtendedKeyUsageInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.extendedKeyUsageInput"></a>

```go
func ExtendedKeyUsageInput() PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageExtendedKeyUsage</a>

---

##### `UnknownExtendedKeyUsagesInput`<sup>Optional</sup> <a name="UnknownExtendedKeyUsagesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.unknownExtendedKeyUsagesInput"></a>

```go
func UnknownExtendedKeyUsagesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.get"></a>

```go
func Get(index *f64) PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput">ObjectIdPathInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath">ObjectIdPath</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectIdPathInput`<sup>Optional</sup> <a name="ObjectIdPathInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPathInput"></a>

```go
func ObjectIdPathInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.objectIdPath"></a>

```go
func ObjectIdPath() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageUnknownExtendedKeyUsagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedDnsNames">ResetExcludedDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedEmailAddresses">ResetExcludedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedIpRanges">ResetExcludedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedUris">ResetExcludedUris</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedDnsNames">ResetPermittedDnsNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedEmailAddresses">ResetPermittedEmailAddresses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedIpRanges">ResetPermittedIpRanges</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedUris">ResetPermittedUris</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedDnsNames` <a name="ResetExcludedDnsNames" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedDnsNames"></a>

```go
func ResetExcludedDnsNames()
```

##### `ResetExcludedEmailAddresses` <a name="ResetExcludedEmailAddresses" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedEmailAddresses"></a>

```go
func ResetExcludedEmailAddresses()
```

##### `ResetExcludedIpRanges` <a name="ResetExcludedIpRanges" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedIpRanges"></a>

```go
func ResetExcludedIpRanges()
```

##### `ResetExcludedUris` <a name="ResetExcludedUris" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetExcludedUris"></a>

```go
func ResetExcludedUris()
```

##### `ResetPermittedDnsNames` <a name="ResetPermittedDnsNames" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedDnsNames"></a>

```go
func ResetPermittedDnsNames()
```

##### `ResetPermittedEmailAddresses` <a name="ResetPermittedEmailAddresses" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedEmailAddresses"></a>

```go
func ResetPermittedEmailAddresses()
```

##### `ResetPermittedIpRanges` <a name="ResetPermittedIpRanges" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedIpRanges"></a>

```go
func ResetPermittedIpRanges()
```

##### `ResetPermittedUris` <a name="ResetPermittedUris" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.resetPermittedUris"></a>

```go
func ResetPermittedUris()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.criticalInput">CriticalInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNamesInput">ExcludedDnsNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddressesInput">ExcludedEmailAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRangesInput">ExcludedIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUrisInput">ExcludedUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNamesInput">PermittedDnsNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddressesInput">PermittedEmailAddressesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRangesInput">PermittedIpRangesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUrisInput">PermittedUrisInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.critical">Critical</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNames">ExcludedDnsNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddresses">ExcludedEmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRanges">ExcludedIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUris">ExcludedUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNames">PermittedDnsNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddresses">PermittedEmailAddresses</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRanges">PermittedIpRanges</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUris">PermittedUris</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CriticalInput`<sup>Optional</sup> <a name="CriticalInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.criticalInput"></a>

```go
func CriticalInput() interface{}
```

- *Type:* interface{}

---

##### `ExcludedDnsNamesInput`<sup>Optional</sup> <a name="ExcludedDnsNamesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNamesInput"></a>

```go
func ExcludedDnsNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedEmailAddressesInput`<sup>Optional</sup> <a name="ExcludedEmailAddressesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddressesInput"></a>

```go
func ExcludedEmailAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedIpRangesInput`<sup>Optional</sup> <a name="ExcludedIpRangesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRangesInput"></a>

```go
func ExcludedIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedUrisInput`<sup>Optional</sup> <a name="ExcludedUrisInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUrisInput"></a>

```go
func ExcludedUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedDnsNamesInput`<sup>Optional</sup> <a name="PermittedDnsNamesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNamesInput"></a>

```go
func PermittedDnsNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedEmailAddressesInput`<sup>Optional</sup> <a name="PermittedEmailAddressesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddressesInput"></a>

```go
func PermittedEmailAddressesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedIpRangesInput`<sup>Optional</sup> <a name="PermittedIpRangesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRangesInput"></a>

```go
func PermittedIpRangesInput() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedUrisInput`<sup>Optional</sup> <a name="PermittedUrisInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUrisInput"></a>

```go
func PermittedUrisInput() *[]*string
```

- *Type:* *[]*string

---

##### `Critical`<sup>Required</sup> <a name="Critical" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.critical"></a>

```go
func Critical() interface{}
```

- *Type:* interface{}

---

##### `ExcludedDnsNames`<sup>Required</sup> <a name="ExcludedDnsNames" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedDnsNames"></a>

```go
func ExcludedDnsNames() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedEmailAddresses`<sup>Required</sup> <a name="ExcludedEmailAddresses" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedEmailAddresses"></a>

```go
func ExcludedEmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedIpRanges`<sup>Required</sup> <a name="ExcludedIpRanges" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedIpRanges"></a>

```go
func ExcludedIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedUris`<sup>Required</sup> <a name="ExcludedUris" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.excludedUris"></a>

```go
func ExcludedUris() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedDnsNames`<sup>Required</sup> <a name="PermittedDnsNames" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedDnsNames"></a>

```go
func PermittedDnsNames() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedEmailAddresses`<sup>Required</sup> <a name="PermittedEmailAddresses" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedEmailAddresses"></a>

```go
func PermittedEmailAddresses() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedIpRanges`<sup>Required</sup> <a name="PermittedIpRanges" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedIpRanges"></a>

```go
func PermittedIpRanges() *[]*string
```

- *Type:* *[]*string

---

##### `PermittedUris`<sup>Required</sup> <a name="PermittedUris" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.permittedUris"></a>

```go
func PermittedUris() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putAdditionalExtensions">PutAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putCaOptions">PutCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putKeyUsage">PutKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putNameConstraints">PutNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putPolicyIds">PutPolicyIds</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAdditionalExtensions">ResetAdditionalExtensions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAiaOcspServers">ResetAiaOcspServers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetNameConstraints">ResetNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetPolicyIds">ResetPolicyIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalExtensions` <a name="PutAdditionalExtensions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putAdditionalExtensions"></a>

```go
func PutAdditionalExtensions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putAdditionalExtensions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCaOptions` <a name="PutCaOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putCaOptions"></a>

```go
func PutCaOptions(value PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putCaOptions.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

---

##### `PutKeyUsage` <a name="PutKeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putKeyUsage"></a>

```go
func PutKeyUsage(value PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putKeyUsage.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

---

##### `PutNameConstraints` <a name="PutNameConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putNameConstraints"></a>

```go
func PutNameConstraints(value PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putNameConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

---

##### `PutPolicyIds` <a name="PutPolicyIds" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putPolicyIds"></a>

```go
func PutPolicyIds(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.putPolicyIds.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalExtensions` <a name="ResetAdditionalExtensions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAdditionalExtensions"></a>

```go
func ResetAdditionalExtensions()
```

##### `ResetAiaOcspServers` <a name="ResetAiaOcspServers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetAiaOcspServers"></a>

```go
func ResetAiaOcspServers()
```

##### `ResetNameConstraints` <a name="ResetNameConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetNameConstraints"></a>

```go
func ResetNameConstraints()
```

##### `ResetPolicyIds` <a name="ResetPolicyIds" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.resetPolicyIds"></a>

```go
func ResetPolicyIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensions">AdditionalExtensions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptions">CaOptions</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsage">KeyUsage</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraints">NameConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIds">PolicyIds</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList">PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensionsInput">AdditionalExtensionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServersInput">AiaOcspServersInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptionsInput">CaOptionsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsageInput">KeyUsageInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraintsInput">NameConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIdsInput">PolicyIdsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServers">AiaOcspServers</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalExtensions`<sup>Required</sup> <a name="AdditionalExtensions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensions"></a>

```go
func AdditionalExtensions() PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList">PrivatecaCaPoolIssuancePolicyBaselineValuesAdditionalExtensionsList</a>

---

##### `CaOptions`<sup>Required</sup> <a name="CaOptions" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptions"></a>

```go
func CaOptions() PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptionsOutputReference</a>

---

##### `KeyUsage`<sup>Required</sup> <a name="KeyUsage" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsage"></a>

```go
func KeyUsage() PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsageOutputReference</a>

---

##### `NameConstraints`<sup>Required</sup> <a name="NameConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraints"></a>

```go
func NameConstraints() PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraintsOutputReference</a>

---

##### `PolicyIds`<sup>Required</sup> <a name="PolicyIds" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIds"></a>

```go
func PolicyIds() PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList">PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList</a>

---

##### `AdditionalExtensionsInput`<sup>Optional</sup> <a name="AdditionalExtensionsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.additionalExtensionsInput"></a>

```go
func AdditionalExtensionsInput() interface{}
```

- *Type:* interface{}

---

##### `AiaOcspServersInput`<sup>Optional</sup> <a name="AiaOcspServersInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServersInput"></a>

```go
func AiaOcspServersInput() *[]*string
```

- *Type:* *[]*string

---

##### `CaOptionsInput`<sup>Optional</sup> <a name="CaOptionsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.caOptionsInput"></a>

```go
func CaOptionsInput() PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions">PrivatecaCaPoolIssuancePolicyBaselineValuesCaOptions</a>

---

##### `KeyUsageInput`<sup>Optional</sup> <a name="KeyUsageInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.keyUsageInput"></a>

```go
func KeyUsageInput() PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage">PrivatecaCaPoolIssuancePolicyBaselineValuesKeyUsage</a>

---

##### `NameConstraintsInput`<sup>Optional</sup> <a name="NameConstraintsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.nameConstraintsInput"></a>

```go
func NameConstraintsInput() PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints">PrivatecaCaPoolIssuancePolicyBaselineValuesNameConstraints</a>

---

##### `PolicyIdsInput`<sup>Optional</sup> <a name="PolicyIdsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.policyIdsInput"></a>

```go
func PolicyIdsInput() interface{}
```

- *Type:* interface{}

---

##### `AiaOcspServers`<sup>Required</sup> <a name="AiaOcspServers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.aiaOcspServers"></a>

```go
func AiaOcspServers() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivatecaCaPoolIssuancePolicyBaselineValues
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a>

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.get"></a>

```go
func Get(index *f64) PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference <a name="PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPathInput">ObjectIdPathInput</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPath">ObjectIdPath</a></code> | <code>*[]*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ObjectIdPathInput`<sup>Optional</sup> <a name="ObjectIdPathInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPathInput"></a>

```go
func ObjectIdPathInput() *[]*f64
```

- *Type:* *[]*f64

---

##### `ObjectIdPath`<sup>Required</sup> <a name="ObjectIdPath" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.objectIdPath"></a>

```go
func ObjectIdPath() *[]*f64
```

- *Type:* *[]*f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesPolicyIdsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference <a name="PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetTitle">ResetTitle</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetLocation"></a>

```go
func ResetLocation()
```

##### `ResetTitle` <a name="ResetTitle" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.resetTitle"></a>

```go
func ResetTitle()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expressionInput">ExpressionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.titleInput">TitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expression">Expression</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.title">Title</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExpressionInput`<sup>Optional</sup> <a name="ExpressionInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expressionInput"></a>

```go
func ExpressionInput() *string
```

- *Type:* *string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `TitleInput`<sup>Optional</sup> <a name="TitleInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.titleInput"></a>

```go
func TitleInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Expression`<sup>Required</sup> <a name="Expression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.expression"></a>

```go
func Expression() *string
```

- *Type:* *string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Title`<sup>Required</sup> <a name="Title" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.title"></a>

```go
func Title() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

---


### PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference <a name="PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.putCelExpression">PutCelExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resetCelExpression">ResetCelExpression</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCelExpression` <a name="PutCelExpression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.putCelExpression"></a>

```go
func PutCelExpression(value PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.putCelExpression.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

---

##### `ResetCelExpression` <a name="ResetCelExpression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.resetCelExpression"></a>

```go
func ResetCelExpression()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpression">CelExpression</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthroughInput">AllowSubjectAltNamesPassthroughInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthroughInput">AllowSubjectPassthroughInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpressionInput">CelExpressionInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthrough">AllowSubjectAltNamesPassthrough</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthrough">AllowSubjectPassthrough</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CelExpression`<sup>Required</sup> <a name="CelExpression" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpression"></a>

```go
func CelExpression() PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpressionOutputReference</a>

---

##### `AllowSubjectAltNamesPassthroughInput`<sup>Optional</sup> <a name="AllowSubjectAltNamesPassthroughInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthroughInput"></a>

```go
func AllowSubjectAltNamesPassthroughInput() interface{}
```

- *Type:* interface{}

---

##### `AllowSubjectPassthroughInput`<sup>Optional</sup> <a name="AllowSubjectPassthroughInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthroughInput"></a>

```go
func AllowSubjectPassthroughInput() interface{}
```

- *Type:* interface{}

---

##### `CelExpressionInput`<sup>Optional</sup> <a name="CelExpressionInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.celExpressionInput"></a>

```go
func CelExpressionInput() PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression">PrivatecaCaPoolIssuancePolicyIdentityConstraintsCelExpression</a>

---

##### `AllowSubjectAltNamesPassthrough`<sup>Required</sup> <a name="AllowSubjectAltNamesPassthrough" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectAltNamesPassthrough"></a>

```go
func AllowSubjectAltNamesPassthrough() interface{}
```

- *Type:* interface{}

---

##### `AllowSubjectPassthrough`<sup>Required</sup> <a name="AllowSubjectPassthrough" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.allowSubjectPassthrough"></a>

```go
func AllowSubjectPassthrough() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivatecaCaPoolIssuancePolicyIdentityConstraints
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

---


### PrivatecaCaPoolIssuancePolicyOutputReference <a name="PrivatecaCaPoolIssuancePolicyOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolIssuancePolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivatecaCaPoolIssuancePolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putAllowedIssuanceModes">PutAllowedIssuanceModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putAllowedKeyTypes">PutAllowedKeyTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putBaselineValues">PutBaselineValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putIdentityConstraints">PutIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedIssuanceModes">ResetAllowedIssuanceModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedKeyTypes">ResetAllowedKeyTypes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetBaselineValues">ResetBaselineValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetIdentityConstraints">ResetIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetMaximumLifetime">ResetMaximumLifetime</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAllowedIssuanceModes` <a name="PutAllowedIssuanceModes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putAllowedIssuanceModes"></a>

```go
func PutAllowedIssuanceModes(value PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putAllowedIssuanceModes.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

---

##### `PutAllowedKeyTypes` <a name="PutAllowedKeyTypes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putAllowedKeyTypes"></a>

```go
func PutAllowedKeyTypes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putAllowedKeyTypes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutBaselineValues` <a name="PutBaselineValues" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putBaselineValues"></a>

```go
func PutBaselineValues(value PrivatecaCaPoolIssuancePolicyBaselineValues)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putBaselineValues.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a>

---

##### `PutIdentityConstraints` <a name="PutIdentityConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putIdentityConstraints"></a>

```go
func PutIdentityConstraints(value PrivatecaCaPoolIssuancePolicyIdentityConstraints)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.putIdentityConstraints.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

---

##### `ResetAllowedIssuanceModes` <a name="ResetAllowedIssuanceModes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedIssuanceModes"></a>

```go
func ResetAllowedIssuanceModes()
```

##### `ResetAllowedKeyTypes` <a name="ResetAllowedKeyTypes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetAllowedKeyTypes"></a>

```go
func ResetAllowedKeyTypes()
```

##### `ResetBaselineValues` <a name="ResetBaselineValues" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetBaselineValues"></a>

```go
func ResetBaselineValues()
```

##### `ResetIdentityConstraints` <a name="ResetIdentityConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetIdentityConstraints"></a>

```go
func ResetIdentityConstraints()
```

##### `ResetMaximumLifetime` <a name="ResetMaximumLifetime" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.resetMaximumLifetime"></a>

```go
func ResetMaximumLifetime()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModes">AllowedIssuanceModes</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypes">AllowedKeyTypes</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValues">BaselineValues</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraints">IdentityConstraints</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference">PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModesInput">AllowedIssuanceModesInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypesInput">AllowedKeyTypesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValuesInput">BaselineValuesInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraintsInput">IdentityConstraintsInput</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetimeInput">MaximumLifetimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetime">MaximumLifetime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowedIssuanceModes`<sup>Required</sup> <a name="AllowedIssuanceModes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModes"></a>

```go
func AllowedIssuanceModes() PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModesOutputReference</a>

---

##### `AllowedKeyTypes`<sup>Required</sup> <a name="AllowedKeyTypes" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypes"></a>

```go
func AllowedKeyTypes() PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList">PrivatecaCaPoolIssuancePolicyAllowedKeyTypesList</a>

---

##### `BaselineValues`<sup>Required</sup> <a name="BaselineValues" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValues"></a>

```go
func BaselineValues() PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference">PrivatecaCaPoolIssuancePolicyBaselineValuesOutputReference</a>

---

##### `IdentityConstraints`<sup>Required</sup> <a name="IdentityConstraints" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraints"></a>

```go
func IdentityConstraints() PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference">PrivatecaCaPoolIssuancePolicyIdentityConstraintsOutputReference</a>

---

##### `AllowedIssuanceModesInput`<sup>Optional</sup> <a name="AllowedIssuanceModesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedIssuanceModesInput"></a>

```go
func AllowedIssuanceModesInput() PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes">PrivatecaCaPoolIssuancePolicyAllowedIssuanceModes</a>

---

##### `AllowedKeyTypesInput`<sup>Optional</sup> <a name="AllowedKeyTypesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.allowedKeyTypesInput"></a>

```go
func AllowedKeyTypesInput() interface{}
```

- *Type:* interface{}

---

##### `BaselineValuesInput`<sup>Optional</sup> <a name="BaselineValuesInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.baselineValuesInput"></a>

```go
func BaselineValuesInput() PrivatecaCaPoolIssuancePolicyBaselineValues
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyBaselineValues">PrivatecaCaPoolIssuancePolicyBaselineValues</a>

---

##### `IdentityConstraintsInput`<sup>Optional</sup> <a name="IdentityConstraintsInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.identityConstraintsInput"></a>

```go
func IdentityConstraintsInput() PrivatecaCaPoolIssuancePolicyIdentityConstraints
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyIdentityConstraints">PrivatecaCaPoolIssuancePolicyIdentityConstraints</a>

---

##### `MaximumLifetimeInput`<sup>Optional</sup> <a name="MaximumLifetimeInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetimeInput"></a>

```go
func MaximumLifetimeInput() *string
```

- *Type:* *string

---

##### `MaximumLifetime`<sup>Required</sup> <a name="MaximumLifetime" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.maximumLifetime"></a>

```go
func MaximumLifetime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivatecaCaPoolIssuancePolicy
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolIssuancePolicy">PrivatecaCaPoolIssuancePolicy</a>

---


### PrivatecaCaPoolPublishingOptionsOutputReference <a name="PrivatecaCaPoolPublishingOptionsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolPublishingOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivatecaCaPoolPublishingOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCertInput">PublishCaCertInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrlInput">PublishCrlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCert">PublishCaCert</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrl">PublishCrl</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublishCaCertInput`<sup>Optional</sup> <a name="PublishCaCertInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCertInput"></a>

```go
func PublishCaCertInput() interface{}
```

- *Type:* interface{}

---

##### `PublishCrlInput`<sup>Optional</sup> <a name="PublishCrlInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrlInput"></a>

```go
func PublishCrlInput() interface{}
```

- *Type:* interface{}

---

##### `PublishCaCert`<sup>Required</sup> <a name="PublishCaCert" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCaCert"></a>

```go
func PublishCaCert() interface{}
```

- *Type:* interface{}

---

##### `PublishCrl`<sup>Required</sup> <a name="PublishCrl" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.publishCrl"></a>

```go
func PublishCrl() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() PrivatecaCaPoolPublishingOptions
```

- *Type:* <a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolPublishingOptions">PrivatecaCaPoolPublishingOptions</a>

---


### PrivatecaCaPoolTimeoutsOutputReference <a name="PrivatecaCaPoolTimeoutsOutputReference" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/privatecacapool"

privatecacapool.NewPrivatecaCaPoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PrivatecaCaPoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.privatecaCaPool.PrivatecaCaPoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



