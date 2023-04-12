# `healthcareHl7V2Store` Submodule <a name="`healthcareHl7V2Store` Submodule" id="@cdktf/provider-google.healthcareHl7V2Store"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthcareHl7V2Store <a name="HealthcareHl7V2Store" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store google_healthcare_hl7_v2_store}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2store"

healthcarehl7v2store.NewHealthcareHl7V2Store(scope Construct, id *string, config HealthcareHl7V2StoreConfig) HealthcareHl7V2Store
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig">HealthcareHl7V2StoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig">HealthcareHl7V2StoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfig">PutNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfigs">PutNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putParserConfig">PutParserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetLabels">ResetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetNotificationConfig">ResetNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetNotificationConfigs">ResetNotificationConfigs</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetParserConfig">ResetParserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutNotificationConfig` <a name="PutNotificationConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfig"></a>

```go
func PutNotificationConfig(value HealthcareHl7V2StoreNotificationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a>

---

##### `PutNotificationConfigs` <a name="PutNotificationConfigs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfigs"></a>

```go
func PutNotificationConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putNotificationConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutParserConfig` <a name="PutParserConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putParserConfig"></a>

```go
func PutParserConfig(value HealthcareHl7V2StoreParserConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putParserConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putTimeouts"></a>

```go
func PutTimeouts(value HealthcareHl7V2StoreTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a>

---

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetId"></a>

```go
func ResetId()
```

##### `ResetLabels` <a name="ResetLabels" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetLabels"></a>

```go
func ResetLabels()
```

##### `ResetNotificationConfig` <a name="ResetNotificationConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetNotificationConfig"></a>

```go
func ResetNotificationConfig()
```

##### `ResetNotificationConfigs` <a name="ResetNotificationConfigs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetNotificationConfigs"></a>

```go
func ResetNotificationConfigs()
```

##### `ResetParserConfig` <a name="ResetParserConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetParserConfig"></a>

```go
func ResetParserConfig()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2store"

healthcarehl7v2store.HealthcareHl7V2Store_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2store"

healthcarehl7v2store.HealthcareHl7V2Store_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2store"

healthcarehl7v2store.HealthcareHl7V2Store_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference">HealthcareHl7V2StoreNotificationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigs">NotificationConfigs</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList">HealthcareHl7V2StoreNotificationConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.parserConfig">ParserConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference">HealthcareHl7V2StoreParserConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.selfLink">SelfLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference">HealthcareHl7V2StoreTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.datasetInput">DatasetInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.labelsInput">LabelsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigInput">NotificationConfigInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigsInput">NotificationConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.parserConfigInput">ParserConfigInput</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.dataset">Dataset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.labels">Labels</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NotificationConfig`<sup>Required</sup> <a name="NotificationConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfig"></a>

```go
func NotificationConfig() HealthcareHl7V2StoreNotificationConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference">HealthcareHl7V2StoreNotificationConfigOutputReference</a>

---

##### `NotificationConfigs`<sup>Required</sup> <a name="NotificationConfigs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigs"></a>

```go
func NotificationConfigs() HealthcareHl7V2StoreNotificationConfigsList
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList">HealthcareHl7V2StoreNotificationConfigsList</a>

---

##### `ParserConfig`<sup>Required</sup> <a name="ParserConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.parserConfig"></a>

```go
func ParserConfig() HealthcareHl7V2StoreParserConfigOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference">HealthcareHl7V2StoreParserConfigOutputReference</a>

---

##### `SelfLink`<sup>Required</sup> <a name="SelfLink" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.selfLink"></a>

```go
func SelfLink() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.timeouts"></a>

```go
func Timeouts() HealthcareHl7V2StoreTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference">HealthcareHl7V2StoreTimeoutsOutputReference</a>

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.datasetInput"></a>

```go
func DatasetInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LabelsInput`<sup>Optional</sup> <a name="LabelsInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.labelsInput"></a>

```go
func LabelsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NotificationConfigInput`<sup>Optional</sup> <a name="NotificationConfigInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigInput"></a>

```go
func NotificationConfigInput() HealthcareHl7V2StoreNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a>

---

##### `NotificationConfigsInput`<sup>Optional</sup> <a name="NotificationConfigsInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.notificationConfigsInput"></a>

```go
func NotificationConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `ParserConfigInput`<sup>Optional</sup> <a name="ParserConfigInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.parserConfigInput"></a>

```go
func ParserConfigInput() HealthcareHl7V2StoreParserConfig
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.dataset"></a>

```go
func Dataset() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.labels"></a>

```go
func Labels() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2Store.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### HealthcareHl7V2StoreConfig <a name="HealthcareHl7V2StoreConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2store"

&healthcarehl7v2store.HealthcareHl7V2StoreConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	Dataset: *string,
	Name: *string,
	Id: *string,
	Labels: *map[string]*string,
	NotificationConfig: github.com/cdktf/cdktf-provider-google-go/google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig,
	NotificationConfigs: interface{},
	ParserConfig: github.com/cdktf/cdktf-provider-google-go/google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.dataset">Dataset</a></code> | <code>*string</code> | Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.name">Name</a></code> | <code>*string</code> | The resource name for the Hl7V2Store. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#id HealthcareHl7V2Store#id}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.labels">Labels</a></code> | <code>*map[string]*string</code> | User-supplied key-value pairs used to organize HL7v2 stores. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.notificationConfig">NotificationConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a></code> | notification_config block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.notificationConfigs">NotificationConfigs</a></code> | <code>interface{}</code> | notification_configs block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.parserConfig">ParserConfig</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a></code> | parser_config block. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.dataset"></a>

```go
Dataset *string
```

- *Type:* *string

Identifies the dataset addressed by this request. Must be in the format 'projects/{project}/locations/{location}/datasets/{dataset}'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#dataset HealthcareHl7V2Store#dataset}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The resource name for the Hl7V2Store.

* Changing this property may recreate the Hl7v2 store (removing all data) **

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#name HealthcareHl7V2Store#name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#id HealthcareHl7V2Store#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Labels`<sup>Optional</sup> <a name="Labels" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.labels"></a>

```go
Labels *map[string]*string
```

- *Type:* *map[string]*string

User-supplied key-value pairs used to organize HL7v2 stores.

Label keys must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128 bytes, and must
conform to the following PCRE regular expression: [\p{Ll}\p{Lo}][\p{Ll}\p{Lo}\p{N}_-]{0,62}

Label values are optional, must be between 1 and 63 characters long, have a UTF-8 encoding of maximum 128
bytes, and must conform to the following PCRE regular expression: [\p{Ll}\p{Lo}\p{N}_-]{0,63}

No more than 64 labels can be associated with a given store.

An object containing a list of "key": value pairs.
Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#labels HealthcareHl7V2Store#labels}

---

##### `NotificationConfig`<sup>Optional</sup> <a name="NotificationConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.notificationConfig"></a>

```go
NotificationConfig HealthcareHl7V2StoreNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a>

notification_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#notification_config HealthcareHl7V2Store#notification_config}

---

##### `NotificationConfigs`<sup>Optional</sup> <a name="NotificationConfigs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.notificationConfigs"></a>

```go
NotificationConfigs interface{}
```

- *Type:* interface{}

notification_configs block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#notification_configs HealthcareHl7V2Store#notification_configs}

---

##### `ParserConfig`<sup>Optional</sup> <a name="ParserConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.parserConfig"></a>

```go
ParserConfig HealthcareHl7V2StoreParserConfig
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a>

parser_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#parser_config HealthcareHl7V2Store#parser_config}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreConfig.property.timeouts"></a>

```go
Timeouts HealthcareHl7V2StoreTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts">HealthcareHl7V2StoreTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#timeouts HealthcareHl7V2Store#timeouts}

---

### HealthcareHl7V2StoreNotificationConfig <a name="HealthcareHl7V2StoreNotificationConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2store"

&healthcarehl7v2store.HealthcareHl7V2StoreNotificationConfig {
	PubsubTopic: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig.property.pubsubTopic"></a>

```go
PubsubTopic *string
```

- *Type:* *string

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#pubsub_topic HealthcareHl7V2Store#pubsub_topic}

---

### HealthcareHl7V2StoreNotificationConfigs <a name="HealthcareHl7V2StoreNotificationConfigs" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2store"

&healthcarehl7v2store.HealthcareHl7V2StoreNotificationConfigs {
	PubsubTopic: *string,
	Filter: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | The Cloud Pub/Sub topic that notifications of changes are published on. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.property.filter">Filter</a></code> | <code>*string</code> | Restricts notifications sent for messages matching a filter. If this is empty, all messages are matched. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings. |

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.property.pubsubTopic"></a>

```go
PubsubTopic *string
```

- *Type:* *string

The Cloud Pub/Sub topic that notifications of changes are published on.

Supplied by the client.
PubsubMessage.Data will contain the resource name. PubsubMessage.MessageId is the ID of this message.
It is guaranteed to be unique within the topic. PubsubMessage.PublishTime is the time at which the message
was published. Notifications are only sent if the topic is non-empty. Topic names must be scoped to a
project. service-PROJECT_NUMBER@gcp-sa-healthcare.iam.gserviceaccount.com must have publisher permissions on the given
Cloud Pub/Sub topic. Not having adequate permissions will cause the calls that send notifications to fail.

If a notification cannot be published to Cloud Pub/Sub, errors will be logged to Stackdriver

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#pubsub_topic HealthcareHl7V2Store#pubsub_topic}

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigs.property.filter"></a>

```go
Filter *string
```

- *Type:* *string

Restricts notifications sent for messages matching a filter. If this is empty, all messages are matched. Syntax: https://cloud.google.com/appengine/docs/standard/python/search/query_strings.

Fields/functions available for filtering are:

messageType, from the MSH-9.1 field. For example, NOT messageType = "ADT".
send_date or sendDate, the YYYY-MM-DD date the message was sent in the dataset's timeZone, from the MSH-7 segment. For example, send_date < "2017-01-02".
sendTime, the timestamp when the message was sent, using the RFC3339 time format for comparisons, from the MSH-7 segment. For example, sendTime < "2017-01-02T00:00:00-05:00".
sendFacility, the care center that the message came from, from the MSH-4 segment. For example, sendFacility = "ABC".
PatientId(value, type), which matches if the message lists a patient having an ID of the given value and type in the PID-2, PID-3, or PID-4 segments. For example, PatientId("123456", "MRN").
labels.x, a string value of the label with key x as set using the Message.labels map. For example, labels."priority"="high". The operator :* can be used to assert the existence of a label. For example, labels."priority":*.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#filter HealthcareHl7V2Store#filter}

---

### HealthcareHl7V2StoreParserConfig <a name="HealthcareHl7V2StoreParserConfig" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2store"

&healthcarehl7v2store.HealthcareHl7V2StoreParserConfig {
	AllowNullHeader: interface{},
	Schema: *string,
	SegmentTerminator: *string,
	Version: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.allowNullHeader">AllowNullHeader</a></code> | <code>interface{}</code> | Determines whether messages with no header are allowed. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.schema">Schema</a></code> | <code>*string</code> | JSON encoded string for schemas used to parse messages in this store if schematized parsing is desired. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.segmentTerminator">SegmentTerminator</a></code> | <code>*string</code> | Byte(s) to be used as the segment terminator. If this is unset, '\r' will be used as segment terminator. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.version">Version</a></code> | <code>*string</code> | The version of the unschematized parser to be used when a custom 'schema' is not set. |

---

##### `AllowNullHeader`<sup>Optional</sup> <a name="AllowNullHeader" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.allowNullHeader"></a>

```go
AllowNullHeader interface{}
```

- *Type:* interface{}

Determines whether messages with no header are allowed.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#allow_null_header HealthcareHl7V2Store#allow_null_header}

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.schema"></a>

```go
Schema *string
```

- *Type:* *string

JSON encoded string for schemas used to parse messages in this store if schematized parsing is desired.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#schema HealthcareHl7V2Store#schema}

---

##### `SegmentTerminator`<sup>Optional</sup> <a name="SegmentTerminator" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.segmentTerminator"></a>

```go
SegmentTerminator *string
```

- *Type:* *string

Byte(s) to be used as the segment terminator. If this is unset, '\r' will be used as segment terminator.

A base64-encoded string.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#segment_terminator HealthcareHl7V2Store#segment_terminator}

---

##### `Version`<sup>Optional</sup> <a name="Version" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

The version of the unschematized parser to be used when a custom 'schema' is not set.

Default value: "V1" Possible values: ["V1", "V2", "V3"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#version HealthcareHl7V2Store#version}

---

### HealthcareHl7V2StoreTimeouts <a name="HealthcareHl7V2StoreTimeouts" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2store"

&healthcarehl7v2store.HealthcareHl7V2StoreTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#create HealthcareHl7V2Store#create}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#delete HealthcareHl7V2Store#delete}. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#update HealthcareHl7V2Store#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#create HealthcareHl7V2Store#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#delete HealthcareHl7V2Store#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/healthcare_hl7_v2_store#update HealthcareHl7V2Store#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### HealthcareHl7V2StoreNotificationConfigOutputReference <a name="HealthcareHl7V2StoreNotificationConfigOutputReference" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2store"

healthcarehl7v2store.NewHealthcareHl7V2StoreNotificationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthcareHl7V2StoreNotificationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.pubsubTopicInput"></a>

```go
func PubsubTopicInput() *string
```

- *Type:* *string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.pubsubTopic"></a>

```go
func PubsubTopic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() HealthcareHl7V2StoreNotificationConfig
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfig">HealthcareHl7V2StoreNotificationConfig</a>

---


### HealthcareHl7V2StoreNotificationConfigsList <a name="HealthcareHl7V2StoreNotificationConfigsList" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2store"

healthcarehl7v2store.NewHealthcareHl7V2StoreNotificationConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) HealthcareHl7V2StoreNotificationConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.get"></a>

```go
func Get(index *f64) HealthcareHl7V2StoreNotificationConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HealthcareHl7V2StoreNotificationConfigsOutputReference <a name="HealthcareHl7V2StoreNotificationConfigsOutputReference" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2store"

healthcarehl7v2store.NewHealthcareHl7V2StoreNotificationConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) HealthcareHl7V2StoreNotificationConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resetFilter">ResetFilter</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFilter` <a name="ResetFilter" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.resetFilter"></a>

```go
func ResetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.filterInput">FilterInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.pubsubTopicInput">PubsubTopicInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.filter">Filter</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.pubsubTopic">PubsubTopic</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.filterInput"></a>

```go
func FilterInput() *string
```

- *Type:* *string

---

##### `PubsubTopicInput`<sup>Optional</sup> <a name="PubsubTopicInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.pubsubTopicInput"></a>

```go
func PubsubTopicInput() *string
```

- *Type:* *string

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.filter"></a>

```go
func Filter() *string
```

- *Type:* *string

---

##### `PubsubTopic`<sup>Required</sup> <a name="PubsubTopic" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.pubsubTopic"></a>

```go
func PubsubTopic() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreNotificationConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### HealthcareHl7V2StoreParserConfigOutputReference <a name="HealthcareHl7V2StoreParserConfigOutputReference" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2store"

healthcarehl7v2store.NewHealthcareHl7V2StoreParserConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthcareHl7V2StoreParserConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetAllowNullHeader">ResetAllowNullHeader</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetSegmentTerminator">ResetSegmentTerminator</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetVersion">ResetVersion</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAllowNullHeader` <a name="ResetAllowNullHeader" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetAllowNullHeader"></a>

```go
func ResetAllowNullHeader()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetSchema"></a>

```go
func ResetSchema()
```

##### `ResetSegmentTerminator` <a name="ResetSegmentTerminator" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetSegmentTerminator"></a>

```go
func ResetSegmentTerminator()
```

##### `ResetVersion` <a name="ResetVersion" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.resetVersion"></a>

```go
func ResetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.allowNullHeaderInput">AllowNullHeaderInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.schemaInput">SchemaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.segmentTerminatorInput">SegmentTerminatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.allowNullHeader">AllowNullHeader</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.segmentTerminator">SegmentTerminator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllowNullHeaderInput`<sup>Optional</sup> <a name="AllowNullHeaderInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.allowNullHeaderInput"></a>

```go
func AllowNullHeaderInput() interface{}
```

- *Type:* interface{}

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.schemaInput"></a>

```go
func SchemaInput() *string
```

- *Type:* *string

---

##### `SegmentTerminatorInput`<sup>Optional</sup> <a name="SegmentTerminatorInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.segmentTerminatorInput"></a>

```go
func SegmentTerminatorInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `AllowNullHeader`<sup>Required</sup> <a name="AllowNullHeader" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.allowNullHeader"></a>

```go
func AllowNullHeader() interface{}
```

- *Type:* interface{}

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `SegmentTerminator`<sup>Required</sup> <a name="SegmentTerminator" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.segmentTerminator"></a>

```go
func SegmentTerminator() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() HealthcareHl7V2StoreParserConfig
```

- *Type:* <a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreParserConfig">HealthcareHl7V2StoreParserConfig</a>

---


### HealthcareHl7V2StoreTimeoutsOutputReference <a name="HealthcareHl7V2StoreTimeoutsOutputReference" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/healthcarehl7v2store"

healthcarehl7v2store.NewHealthcareHl7V2StoreTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) HealthcareHl7V2StoreTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.healthcareHl7V2Store.HealthcareHl7V2StoreTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



