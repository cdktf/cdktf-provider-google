# `google_app_engine_application`

Refer to the Terraform Registory for docs: [`google_app_engine_application`](https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application).

# `appEngineApplication` Submodule <a name="`appEngineApplication` Submodule" id="@cdktf/provider-google.appEngineApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppEngineApplication <a name="AppEngineApplication" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application google_app_engine_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.Initializer"></a>

```typescript
import { appEngineApplication } from '@cdktf/provider-google'

new appEngineApplication.AppEngineApplication(scope: Construct, id: string, config: AppEngineApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig">AppEngineApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig">AppEngineApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.putFeatureSettings">putFeatureSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.putIap">putIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetAuthDomain">resetAuthDomain</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetDatabaseType">resetDatabaseType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetFeatureSettings">resetFeatureSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetIap">resetIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetServingStatus">resetServingStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFeatureSettings` <a name="putFeatureSettings" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.putFeatureSettings"></a>

```typescript
public putFeatureSettings(value: AppEngineApplicationFeatureSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.putFeatureSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings">AppEngineApplicationFeatureSettings</a>

---

##### `putIap` <a name="putIap" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.putIap"></a>

```typescript
public putIap(value: AppEngineApplicationIap): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.putIap.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap">AppEngineApplicationIap</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.putTimeouts"></a>

```typescript
public putTimeouts(value: AppEngineApplicationTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts">AppEngineApplicationTimeouts</a>

---

##### `resetAuthDomain` <a name="resetAuthDomain" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetAuthDomain"></a>

```typescript
public resetAuthDomain(): void
```

##### `resetDatabaseType` <a name="resetDatabaseType" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetDatabaseType"></a>

```typescript
public resetDatabaseType(): void
```

##### `resetFeatureSettings` <a name="resetFeatureSettings" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetFeatureSettings"></a>

```typescript
public resetFeatureSettings(): void
```

##### `resetIap` <a name="resetIap" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetIap"></a>

```typescript
public resetIap(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetServingStatus` <a name="resetServingStatus" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetServingStatus"></a>

```typescript
public resetServingStatus(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.isConstruct"></a>

```typescript
import { appEngineApplication } from '@cdktf/provider-google'

appEngineApplication.AppEngineApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.isTerraformElement"></a>

```typescript
import { appEngineApplication } from '@cdktf/provider-google'

appEngineApplication.AppEngineApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.isTerraformResource"></a>

```typescript
import { appEngineApplication } from '@cdktf/provider-google'

appEngineApplication.AppEngineApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.appId">appId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.codeBucket">codeBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.defaultBucket">defaultBucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.defaultHostname">defaultHostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.featureSettings">featureSettings</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference">AppEngineApplicationFeatureSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.gcrDomain">gcrDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.iap">iap</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference">AppEngineApplicationIapOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference">AppEngineApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.urlDispatchRule">urlDispatchRule</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList">AppEngineApplicationUrlDispatchRuleList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.authDomainInput">authDomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.databaseTypeInput">databaseTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.featureSettingsInput">featureSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings">AppEngineApplicationFeatureSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.iapInput">iapInput</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap">AppEngineApplicationIap</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.locationIdInput">locationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.servingStatusInput">servingStatusInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts">AppEngineApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.authDomain">authDomain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.databaseType">databaseType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.locationId">locationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.servingStatus">servingStatus</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appId`<sup>Required</sup> <a name="appId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.appId"></a>

```typescript
public readonly appId: string;
```

- *Type:* string

---

##### `codeBucket`<sup>Required</sup> <a name="codeBucket" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.codeBucket"></a>

```typescript
public readonly codeBucket: string;
```

- *Type:* string

---

##### `defaultBucket`<sup>Required</sup> <a name="defaultBucket" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.defaultBucket"></a>

```typescript
public readonly defaultBucket: string;
```

- *Type:* string

---

##### `defaultHostname`<sup>Required</sup> <a name="defaultHostname" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.defaultHostname"></a>

```typescript
public readonly defaultHostname: string;
```

- *Type:* string

---

##### `featureSettings`<sup>Required</sup> <a name="featureSettings" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.featureSettings"></a>

```typescript
public readonly featureSettings: AppEngineApplicationFeatureSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference">AppEngineApplicationFeatureSettingsOutputReference</a>

---

##### `gcrDomain`<sup>Required</sup> <a name="gcrDomain" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.gcrDomain"></a>

```typescript
public readonly gcrDomain: string;
```

- *Type:* string

---

##### `iap`<sup>Required</sup> <a name="iap" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.iap"></a>

```typescript
public readonly iap: AppEngineApplicationIapOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference">AppEngineApplicationIapOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.timeouts"></a>

```typescript
public readonly timeouts: AppEngineApplicationTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference">AppEngineApplicationTimeoutsOutputReference</a>

---

##### `urlDispatchRule`<sup>Required</sup> <a name="urlDispatchRule" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.urlDispatchRule"></a>

```typescript
public readonly urlDispatchRule: AppEngineApplicationUrlDispatchRuleList;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList">AppEngineApplicationUrlDispatchRuleList</a>

---

##### `authDomainInput`<sup>Optional</sup> <a name="authDomainInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.authDomainInput"></a>

```typescript
public readonly authDomainInput: string;
```

- *Type:* string

---

##### `databaseTypeInput`<sup>Optional</sup> <a name="databaseTypeInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.databaseTypeInput"></a>

```typescript
public readonly databaseTypeInput: string;
```

- *Type:* string

---

##### `featureSettingsInput`<sup>Optional</sup> <a name="featureSettingsInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.featureSettingsInput"></a>

```typescript
public readonly featureSettingsInput: AppEngineApplicationFeatureSettings;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings">AppEngineApplicationFeatureSettings</a>

---

##### `iapInput`<sup>Optional</sup> <a name="iapInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.iapInput"></a>

```typescript
public readonly iapInput: AppEngineApplicationIap;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap">AppEngineApplicationIap</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationIdInput`<sup>Optional</sup> <a name="locationIdInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.locationIdInput"></a>

```typescript
public readonly locationIdInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `servingStatusInput`<sup>Optional</sup> <a name="servingStatusInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.servingStatusInput"></a>

```typescript
public readonly servingStatusInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | AppEngineApplicationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts">AppEngineApplicationTimeouts</a>

---

##### `authDomain`<sup>Required</sup> <a name="authDomain" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.authDomain"></a>

```typescript
public readonly authDomain: string;
```

- *Type:* string

---

##### `databaseType`<sup>Required</sup> <a name="databaseType" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `locationId`<sup>Required</sup> <a name="locationId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.locationId"></a>

```typescript
public readonly locationId: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `servingStatus`<sup>Required</sup> <a name="servingStatus" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.servingStatus"></a>

```typescript
public readonly servingStatus: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.appEngineApplication.AppEngineApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppEngineApplicationConfig <a name="AppEngineApplicationConfig" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.Initializer"></a>

```typescript
import { appEngineApplication } from '@cdktf/provider-google'

const appEngineApplicationConfig: appEngineApplication.AppEngineApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.locationId">locationId</a></code> | <code>string</code> | The location to serve the app from. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.authDomain">authDomain</a></code> | <code>string</code> | The domain to authenticate users with when using App Engine's User API. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.databaseType">databaseType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#database_type AppEngineApplication#database_type}. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.featureSettings">featureSettings</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings">AppEngineApplicationFeatureSettings</a></code> | feature_settings block. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.iap">iap</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap">AppEngineApplicationIap</a></code> | iap block. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#id AppEngineApplication#id}. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.project">project</a></code> | <code>string</code> | The project ID to create the application under. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.servingStatus">servingStatus</a></code> | <code>string</code> | The serving status of the app. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts">AppEngineApplicationTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `locationId`<sup>Required</sup> <a name="locationId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.locationId"></a>

```typescript
public readonly locationId: string;
```

- *Type:* string

The location to serve the app from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#location_id AppEngineApplication#location_id}

---

##### `authDomain`<sup>Optional</sup> <a name="authDomain" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.authDomain"></a>

```typescript
public readonly authDomain: string;
```

- *Type:* string

The domain to authenticate users with when using App Engine's User API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#auth_domain AppEngineApplication#auth_domain}

---

##### `databaseType`<sup>Optional</sup> <a name="databaseType" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.databaseType"></a>

```typescript
public readonly databaseType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#database_type AppEngineApplication#database_type}.

---

##### `featureSettings`<sup>Optional</sup> <a name="featureSettings" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.featureSettings"></a>

```typescript
public readonly featureSettings: AppEngineApplicationFeatureSettings;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings">AppEngineApplicationFeatureSettings</a>

feature_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#feature_settings AppEngineApplication#feature_settings}

---

##### `iap`<sup>Optional</sup> <a name="iap" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.iap"></a>

```typescript
public readonly iap: AppEngineApplicationIap;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap">AppEngineApplicationIap</a>

iap block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#iap AppEngineApplication#iap}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#id AppEngineApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project ID to create the application under.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#project AppEngineApplication#project}

---

##### `servingStatus`<sup>Optional</sup> <a name="servingStatus" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.servingStatus"></a>

```typescript
public readonly servingStatus: string;
```

- *Type:* string

The serving status of the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#serving_status AppEngineApplication#serving_status}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationConfig.property.timeouts"></a>

```typescript
public readonly timeouts: AppEngineApplicationTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts">AppEngineApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#timeouts AppEngineApplication#timeouts}

---

### AppEngineApplicationFeatureSettings <a name="AppEngineApplicationFeatureSettings" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings.Initializer"></a>

```typescript
import { appEngineApplication } from '@cdktf/provider-google'

const appEngineApplicationFeatureSettings: appEngineApplication.AppEngineApplicationFeatureSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings.property.splitHealthChecks">splitHealthChecks</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#split_health_checks AppEngineApplication#split_health_checks}. |

---

##### `splitHealthChecks`<sup>Required</sup> <a name="splitHealthChecks" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings.property.splitHealthChecks"></a>

```typescript
public readonly splitHealthChecks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#split_health_checks AppEngineApplication#split_health_checks}.

---

### AppEngineApplicationIap <a name="AppEngineApplicationIap" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap.Initializer"></a>

```typescript
import { appEngineApplication } from '@cdktf/provider-google'

const appEngineApplicationIap: appEngineApplication.AppEngineApplicationIap = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap.property.oauth2ClientId">oauth2ClientId</a></code> | <code>string</code> | OAuth2 client ID to use for the authentication flow. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap.property.oauth2ClientSecret">oauth2ClientSecret</a></code> | <code>string</code> | OAuth2 client secret to use for the authentication flow. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Adapted for use with the app. |

---

##### `oauth2ClientId`<sup>Required</sup> <a name="oauth2ClientId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap.property.oauth2ClientId"></a>

```typescript
public readonly oauth2ClientId: string;
```

- *Type:* string

OAuth2 client ID to use for the authentication flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#oauth2_client_id AppEngineApplication#oauth2_client_id}

---

##### `oauth2ClientSecret`<sup>Required</sup> <a name="oauth2ClientSecret" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap.property.oauth2ClientSecret"></a>

```typescript
public readonly oauth2ClientSecret: string;
```

- *Type:* string

OAuth2 client secret to use for the authentication flow.

The SHA-256 hash of the value is returned in the oauth2ClientSecretSha256 field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#oauth2_client_secret AppEngineApplication#oauth2_client_secret}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Adapted for use with the app.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#enabled AppEngineApplication#enabled}

---

### AppEngineApplicationTimeouts <a name="AppEngineApplicationTimeouts" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts.Initializer"></a>

```typescript
import { appEngineApplication } from '@cdktf/provider-google'

const appEngineApplicationTimeouts: appEngineApplication.AppEngineApplicationTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#create AppEngineApplication#create}. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#update AppEngineApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#create AppEngineApplication#create}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.80.0/docs/resources/app_engine_application#update AppEngineApplication#update}.

---

### AppEngineApplicationUrlDispatchRule <a name="AppEngineApplicationUrlDispatchRule" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRule.Initializer"></a>

```typescript
import { appEngineApplication } from '@cdktf/provider-google'

const appEngineApplicationUrlDispatchRule: appEngineApplication.AppEngineApplicationUrlDispatchRule = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### AppEngineApplicationFeatureSettingsOutputReference <a name="AppEngineApplicationFeatureSettingsOutputReference" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.Initializer"></a>

```typescript
import { appEngineApplication } from '@cdktf/provider-google'

new appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.splitHealthChecksInput">splitHealthChecksInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.splitHealthChecks">splitHealthChecks</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings">AppEngineApplicationFeatureSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `splitHealthChecksInput`<sup>Optional</sup> <a name="splitHealthChecksInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.splitHealthChecksInput"></a>

```typescript
public readonly splitHealthChecksInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `splitHealthChecks`<sup>Required</sup> <a name="splitHealthChecks" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.splitHealthChecks"></a>

```typescript
public readonly splitHealthChecks: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineApplicationFeatureSettings;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationFeatureSettings">AppEngineApplicationFeatureSettings</a>

---


### AppEngineApplicationIapOutputReference <a name="AppEngineApplicationIapOutputReference" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.Initializer"></a>

```typescript
import { appEngineApplication } from '@cdktf/provider-google'

new appEngineApplication.AppEngineApplicationIapOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientSecretSha256">oauth2ClientSecretSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientIdInput">oauth2ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientSecretInput">oauth2ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientId">oauth2ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientSecret">oauth2ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap">AppEngineApplicationIap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `oauth2ClientSecretSha256`<sup>Required</sup> <a name="oauth2ClientSecretSha256" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientSecretSha256"></a>

```typescript
public readonly oauth2ClientSecretSha256: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oauth2ClientIdInput`<sup>Optional</sup> <a name="oauth2ClientIdInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientIdInput"></a>

```typescript
public readonly oauth2ClientIdInput: string;
```

- *Type:* string

---

##### `oauth2ClientSecretInput`<sup>Optional</sup> <a name="oauth2ClientSecretInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientSecretInput"></a>

```typescript
public readonly oauth2ClientSecretInput: string;
```

- *Type:* string

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `oauth2ClientId`<sup>Required</sup> <a name="oauth2ClientId" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientId"></a>

```typescript
public readonly oauth2ClientId: string;
```

- *Type:* string

---

##### `oauth2ClientSecret`<sup>Required</sup> <a name="oauth2ClientSecret" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.oauth2ClientSecret"></a>

```typescript
public readonly oauth2ClientSecret: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationIapOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineApplicationIap;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationIap">AppEngineApplicationIap</a>

---


### AppEngineApplicationTimeoutsOutputReference <a name="AppEngineApplicationTimeoutsOutputReference" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.Initializer"></a>

```typescript
import { appEngineApplication } from '@cdktf/provider-google'

new appEngineApplication.AppEngineApplicationTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts">AppEngineApplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | AppEngineApplicationTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationTimeouts">AppEngineApplicationTimeouts</a>

---


### AppEngineApplicationUrlDispatchRuleList <a name="AppEngineApplicationUrlDispatchRuleList" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.Initializer"></a>

```typescript
import { appEngineApplication } from '@cdktf/provider-google'

new appEngineApplication.AppEngineApplicationUrlDispatchRuleList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.get"></a>

```typescript
public get(index: number): AppEngineApplicationUrlDispatchRuleOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### AppEngineApplicationUrlDispatchRuleOutputReference <a name="AppEngineApplicationUrlDispatchRuleOutputReference" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.Initializer"></a>

```typescript
import { appEngineApplication } from '@cdktf/provider-google'

new appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.domain">domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.path">path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.service">service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRule">AppEngineApplicationUrlDispatchRule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.domain"></a>

```typescript
public readonly domain: string;
```

- *Type:* string

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.path"></a>

```typescript
public readonly path: string;
```

- *Type:* string

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.service"></a>

```typescript
public readonly service: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRuleOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppEngineApplicationUrlDispatchRule;
```

- *Type:* <a href="#@cdktf/provider-google.appEngineApplication.AppEngineApplicationUrlDispatchRule">AppEngineApplicationUrlDispatchRule</a>

---



