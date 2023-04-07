# `apigeeOrganization` Submodule <a name="`apigeeOrganization` Submodule" id="@cdktf/provider-google.apigeeOrganization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApigeeOrganization <a name="ApigeeOrganization" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization"></a>

Represents a {@link https://www.terraform.io/docs/providers/google/r/apigee_organization google_apigee_organization}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeorganization"

apigeeorganization.NewApigeeOrganization(scope Construct, id *string, config ApigeeOrganizationConfig) ApigeeOrganization
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig">ApigeeOrganizationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig">ApigeeOrganizationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.putProperties">PutProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetAnalyticsRegion">ResetAnalyticsRegion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetAuthorizedNetwork">ResetAuthorizedNetwork</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetBillingType">ResetBillingType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetProperties">ResetProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetRetention">ResetRetention</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetRuntimeDatabaseEncryptionKeyName">ResetRuntimeDatabaseEncryptionKeyName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetRuntimeType">ResetRuntimeType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToMetadata` <a name="ToMetadata" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutProperties` <a name="PutProperties" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.putProperties"></a>

```go
func PutProperties(value ApigeeOrganizationProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.putProperties.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties">ApigeeOrganizationProperties</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.putTimeouts"></a>

```go
func PutTimeouts(value ApigeeOrganizationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts">ApigeeOrganizationTimeouts</a>

---

##### `ResetAnalyticsRegion` <a name="ResetAnalyticsRegion" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetAnalyticsRegion"></a>

```go
func ResetAnalyticsRegion()
```

##### `ResetAuthorizedNetwork` <a name="ResetAuthorizedNetwork" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetAuthorizedNetwork"></a>

```go
func ResetAuthorizedNetwork()
```

##### `ResetBillingType` <a name="ResetBillingType" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetBillingType"></a>

```go
func ResetBillingType()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetId"></a>

```go
func ResetId()
```

##### `ResetProperties` <a name="ResetProperties" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetProperties"></a>

```go
func ResetProperties()
```

##### `ResetRetention` <a name="ResetRetention" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetRetention"></a>

```go
func ResetRetention()
```

##### `ResetRuntimeDatabaseEncryptionKeyName` <a name="ResetRuntimeDatabaseEncryptionKeyName" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetRuntimeDatabaseEncryptionKeyName"></a>

```go
func ResetRuntimeDatabaseEncryptionKeyName()
```

##### `ResetRuntimeType` <a name="ResetRuntimeType" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetRuntimeType"></a>

```go
func ResetRuntimeType()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.isTerraformResource">IsTerraformResource</a></code> | *No description.* |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.isConstruct"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeorganization"

apigeeorganization.ApigeeOrganization_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.isTerraformElement"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeorganization"

apigeeorganization.ApigeeOrganization_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.isTerraformResource"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeorganization"

apigeeorganization.ApigeeOrganization_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.caCertificate">CaCertificate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference">ApigeeOrganizationPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.subscriptionType">SubscriptionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference">ApigeeOrganizationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.analyticsRegionInput">AnalyticsRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.authorizedNetworkInput">AuthorizedNetworkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.billingTypeInput">BillingTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.propertiesInput">PropertiesInput</a></code> | <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties">ApigeeOrganizationProperties</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.retentionInput">RetentionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.runtimeDatabaseEncryptionKeyNameInput">RuntimeDatabaseEncryptionKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.runtimeTypeInput">RuntimeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.analyticsRegion">AnalyticsRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.authorizedNetwork">AuthorizedNetwork</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.billingType">BillingType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.retention">Retention</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.runtimeDatabaseEncryptionKeyName">RuntimeDatabaseEncryptionKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.runtimeType">RuntimeType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.count"></a>

```go
func Count() *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CaCertificate`<sup>Required</sup> <a name="CaCertificate" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.caCertificate"></a>

```go
func CaCertificate() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Properties`<sup>Required</sup> <a name="Properties" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.properties"></a>

```go
func Properties() ApigeeOrganizationPropertiesOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference">ApigeeOrganizationPropertiesOutputReference</a>

---

##### `SubscriptionType`<sup>Required</sup> <a name="SubscriptionType" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.subscriptionType"></a>

```go
func SubscriptionType() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.timeouts"></a>

```go
func Timeouts() ApigeeOrganizationTimeoutsOutputReference
```

- *Type:* <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference">ApigeeOrganizationTimeoutsOutputReference</a>

---

##### `AnalyticsRegionInput`<sup>Optional</sup> <a name="AnalyticsRegionInput" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.analyticsRegionInput"></a>

```go
func AnalyticsRegionInput() *string
```

- *Type:* *string

---

##### `AuthorizedNetworkInput`<sup>Optional</sup> <a name="AuthorizedNetworkInput" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.authorizedNetworkInput"></a>

```go
func AuthorizedNetworkInput() *string
```

- *Type:* *string

---

##### `BillingTypeInput`<sup>Optional</sup> <a name="BillingTypeInput" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.billingTypeInput"></a>

```go
func BillingTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `PropertiesInput`<sup>Optional</sup> <a name="PropertiesInput" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.propertiesInput"></a>

```go
func PropertiesInput() ApigeeOrganizationProperties
```

- *Type:* <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties">ApigeeOrganizationProperties</a>

---

##### `RetentionInput`<sup>Optional</sup> <a name="RetentionInput" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.retentionInput"></a>

```go
func RetentionInput() *string
```

- *Type:* *string

---

##### `RuntimeDatabaseEncryptionKeyNameInput`<sup>Optional</sup> <a name="RuntimeDatabaseEncryptionKeyNameInput" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.runtimeDatabaseEncryptionKeyNameInput"></a>

```go
func RuntimeDatabaseEncryptionKeyNameInput() *string
```

- *Type:* *string

---

##### `RuntimeTypeInput`<sup>Optional</sup> <a name="RuntimeTypeInput" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.runtimeTypeInput"></a>

```go
func RuntimeTypeInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `AnalyticsRegion`<sup>Required</sup> <a name="AnalyticsRegion" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.analyticsRegion"></a>

```go
func AnalyticsRegion() *string
```

- *Type:* *string

---

##### `AuthorizedNetwork`<sup>Required</sup> <a name="AuthorizedNetwork" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.authorizedNetwork"></a>

```go
func AuthorizedNetwork() *string
```

- *Type:* *string

---

##### `BillingType`<sup>Required</sup> <a name="BillingType" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.billingType"></a>

```go
func BillingType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `Retention`<sup>Required</sup> <a name="Retention" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.retention"></a>

```go
func Retention() *string
```

- *Type:* *string

---

##### `RuntimeDatabaseEncryptionKeyName`<sup>Required</sup> <a name="RuntimeDatabaseEncryptionKeyName" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.runtimeDatabaseEncryptionKeyName"></a>

```go
func RuntimeDatabaseEncryptionKeyName() *string
```

- *Type:* *string

---

##### `RuntimeType`<sup>Required</sup> <a name="RuntimeType" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.runtimeType"></a>

```go
func RuntimeType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganization.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApigeeOrganizationConfig <a name="ApigeeOrganizationConfig" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeorganization"

&apigeeorganization.ApigeeOrganizationConfig {
	Connection: interface{},
	Count: *f64,
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ProjectId: *string,
	AnalyticsRegion: *string,
	AuthorizedNetwork: *string,
	BillingType: *string,
	Description: *string,
	DisplayName: *string,
	Id: *string,
	Properties: github.com/cdktf/cdktf-provider-google-go/google.apigeeOrganization.ApigeeOrganizationProperties,
	Retention: *string,
	RuntimeDatabaseEncryptionKeyName: *string,
	RuntimeType: *string,
	Timeouts: github.com/cdktf/cdktf-provider-google-go/google.apigeeOrganization.ApigeeOrganizationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.count">Count</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.projectId">ProjectId</a></code> | <code>*string</code> | The project ID associated with the Apigee organization. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.analyticsRegion">AnalyticsRegion</a></code> | <code>*string</code> | Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org). |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.authorizedNetwork">AuthorizedNetwork</a></code> | <code>*string</code> | Compute Engine network used for Service Networking to be peered with Apigee runtime instances. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.billingType">BillingType</a></code> | <code>*string</code> | Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing). |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.description">Description</a></code> | <code>*string</code> | Description of the Apigee organization. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The display name of the Apigee organization. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#id ApigeeOrganization#id}. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.properties">Properties</a></code> | <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties">ApigeeOrganizationProperties</a></code> | properties block. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.retention">Retention</a></code> | <code>*string</code> | Optional. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.runtimeDatabaseEncryptionKeyName">RuntimeDatabaseEncryptionKeyName</a></code> | <code>*string</code> | Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.runtimeType">RuntimeType</a></code> | <code>*string</code> | Runtime type of the Apigee organization based on the Apigee subscription purchased. Default value: "CLOUD" Possible values: ["CLOUD", "HYBRID"]. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts">ApigeeOrganizationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.count"></a>

```go
Count *f64
```

- *Type:* *f64

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

The project ID associated with the Apigee organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#project_id ApigeeOrganization#project_id}

---

##### `AnalyticsRegion`<sup>Optional</sup> <a name="AnalyticsRegion" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.analyticsRegion"></a>

```go
AnalyticsRegion *string
```

- *Type:* *string

Primary GCP region for analytics data storage. For valid values, see [Create an Apigee organization](https://cloud.google.com/apigee/docs/api-platform/get-started/create-org).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#analytics_region ApigeeOrganization#analytics_region}

---

##### `AuthorizedNetwork`<sup>Optional</sup> <a name="AuthorizedNetwork" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.authorizedNetwork"></a>

```go
AuthorizedNetwork *string
```

- *Type:* *string

Compute Engine network used for Service Networking to be peered with Apigee runtime instances.

See [Getting started with the Service Networking API](https://cloud.google.com/service-infrastructure/docs/service-networking/getting-started).
Valid only when 'RuntimeType' is set to CLOUD. The value can be updated only when there are no runtime instances. For example: "default".

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#authorized_network ApigeeOrganization#authorized_network}

---

##### `BillingType`<sup>Optional</sup> <a name="BillingType" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.billingType"></a>

```go
BillingType *string
```

- *Type:* *string

Billing type of the Apigee organization. See [Apigee pricing](https://cloud.google.com/apigee/pricing).

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#billing_type ApigeeOrganization#billing_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the Apigee organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#description ApigeeOrganization#description}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The display name of the Apigee organization.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#display_name ApigeeOrganization#display_name}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#id ApigeeOrganization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Properties`<sup>Optional</sup> <a name="Properties" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.properties"></a>

```go
Properties ApigeeOrganizationProperties
```

- *Type:* <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties">ApigeeOrganizationProperties</a>

properties block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#properties ApigeeOrganization#properties}

---

##### `Retention`<sup>Optional</sup> <a name="Retention" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.retention"></a>

```go
Retention *string
```

- *Type:* *string

Optional.

This setting is applicable only for organizations that are soft-deleted (i.e., BillingType
is not EVALUATION). It controls how long Organization data will be retained after the initial delete
operation completes. During this period, the Organization may be restored to its last known state.
After this period, the Organization will no longer be able to be restored. Default value: "DELETION_RETENTION_UNSPECIFIED" Possible values: ["DELETION_RETENTION_UNSPECIFIED", "MINIMUM"]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#retention ApigeeOrganization#retention}

---

##### `RuntimeDatabaseEncryptionKeyName`<sup>Optional</sup> <a name="RuntimeDatabaseEncryptionKeyName" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.runtimeDatabaseEncryptionKeyName"></a>

```go
RuntimeDatabaseEncryptionKeyName *string
```

- *Type:* *string

Cloud KMS key name used for encrypting the data that is stored and replicated across runtime instances.

Update is not allowed after the organization is created.
If not specified, a Google-Managed encryption key will be used.
Valid only when 'RuntimeType' is CLOUD. For example: 'projects/foo/locations/us/keyRings/bar/cryptoKeys/baz'.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#runtime_database_encryption_key_name ApigeeOrganization#runtime_database_encryption_key_name}

---

##### `RuntimeType`<sup>Optional</sup> <a name="RuntimeType" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.runtimeType"></a>

```go
RuntimeType *string
```

- *Type:* *string

Runtime type of the Apigee organization based on the Apigee subscription purchased. Default value: "CLOUD" Possible values: ["CLOUD", "HYBRID"].

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#runtime_type ApigeeOrganization#runtime_type}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationConfig.property.timeouts"></a>

```go
Timeouts ApigeeOrganizationTimeouts
```

- *Type:* <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts">ApigeeOrganizationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#timeouts ApigeeOrganization#timeouts}

---

### ApigeeOrganizationProperties <a name="ApigeeOrganizationProperties" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeorganization"

&apigeeorganization.ApigeeOrganizationProperties {
	Property: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties.property.property">Property</a></code> | <code>interface{}</code> | property block. |

---

##### `Property`<sup>Optional</sup> <a name="Property" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties.property.property"></a>

```go
Property interface{}
```

- *Type:* interface{}

property block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#property ApigeeOrganization#property}

---

### ApigeeOrganizationPropertiesProperty <a name="ApigeeOrganizationPropertiesProperty" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeorganization"

&apigeeorganization.ApigeeOrganizationPropertiesProperty {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty.property.name">Name</a></code> | <code>*string</code> | Name of the property. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty.property.value">Value</a></code> | <code>*string</code> | Value of the property. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the property.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#name ApigeeOrganization#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesProperty.property.value"></a>

```go
Value *string
```

- *Type:* *string

Value of the property.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#value ApigeeOrganization#value}

---

### ApigeeOrganizationTimeouts <a name="ApigeeOrganizationTimeouts" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeorganization"

&apigeeorganization.ApigeeOrganizationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#create ApigeeOrganization#create}. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#delete ApigeeOrganization#delete}. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#update ApigeeOrganization#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#create ApigeeOrganization#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#delete ApigeeOrganization#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/google/r/apigee_organization#update ApigeeOrganization#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApigeeOrganizationPropertiesOutputReference <a name="ApigeeOrganizationPropertiesOutputReference" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeorganization"

apigeeorganization.NewApigeeOrganizationPropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeOrganizationPropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.putProperty">PutProperty</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.resetProperty">ResetProperty</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutProperty` <a name="PutProperty" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.putProperty"></a>

```go
func PutProperty(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.putProperty.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetProperty` <a name="ResetProperty" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.resetProperty"></a>

```go
func ResetProperty()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.property">Property</a></code> | <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList">ApigeeOrganizationPropertiesPropertyList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.propertyInput">PropertyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties">ApigeeOrganizationProperties</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Property`<sup>Required</sup> <a name="Property" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.property"></a>

```go
func Property() ApigeeOrganizationPropertiesPropertyList
```

- *Type:* <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList">ApigeeOrganizationPropertiesPropertyList</a>

---

##### `PropertyInput`<sup>Optional</sup> <a name="PropertyInput" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.propertyInput"></a>

```go
func PropertyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() ApigeeOrganizationProperties
```

- *Type:* <a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationProperties">ApigeeOrganizationProperties</a>

---


### ApigeeOrganizationPropertiesPropertyList <a name="ApigeeOrganizationPropertiesPropertyList" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeorganization"

apigeeorganization.NewApigeeOrganizationPropertiesPropertyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApigeeOrganizationPropertiesPropertyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.get"></a>

```go
func Get(index *f64) ApigeeOrganizationPropertiesPropertyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigeeOrganizationPropertiesPropertyOutputReference <a name="ApigeeOrganizationPropertiesPropertyOutputReference" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeorganization"

apigeeorganization.NewApigeeOrganizationPropertiesPropertyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApigeeOrganizationPropertiesPropertyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationPropertiesPropertyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApigeeOrganizationTimeoutsOutputReference <a name="ApigeeOrganizationTimeoutsOutputReference" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/cdktf/cdktf-provider-google-go/google/apigeeorganization"

apigeeorganization.NewApigeeOrganizationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApigeeOrganizationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktf/provider-google.apigeeOrganization.ApigeeOrganizationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



