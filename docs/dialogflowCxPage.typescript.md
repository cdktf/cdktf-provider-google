# `google_dialogflow_cx_page`

Refer to the Terraform Registory for docs: [`google_dialogflow_cx_page`](https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page).

# `dialogflowCxPage` Submodule <a name="`dialogflowCxPage` Submodule" id="@cdktf/provider-google.dialogflowCxPage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxPage <a name="DialogflowCxPage" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page google_dialogflow_cx_page}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPage(scope: Construct, id: string, config: DialogflowCxPageConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig">DialogflowCxPageConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig">DialogflowCxPageConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putEntryFulfillment">putEntryFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putEventHandlers">putEventHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putForm">putForm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putTransitionRoutes">putTransitionRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetEntryFulfillment">resetEntryFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetEventHandlers">resetEventHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetForm">resetForm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetTransitionRouteGroups">resetTransitionRouteGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetTransitionRoutes">resetTransitionRoutes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEntryFulfillment` <a name="putEntryFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putEntryFulfillment"></a>

```typescript
public putEntryFulfillment(value: DialogflowCxPageEntryFulfillment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putEntryFulfillment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment">DialogflowCxPageEntryFulfillment</a>

---

##### `putEventHandlers` <a name="putEventHandlers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putEventHandlers"></a>

```typescript
public putEventHandlers(value: IResolvable | DialogflowCxPageEventHandlers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putEventHandlers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers">DialogflowCxPageEventHandlers</a>[]

---

##### `putForm` <a name="putForm" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putForm"></a>

```typescript
public putForm(value: DialogflowCxPageForm): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putForm.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm">DialogflowCxPageForm</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putTimeouts"></a>

```typescript
public putTimeouts(value: DialogflowCxPageTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts">DialogflowCxPageTimeouts</a>

---

##### `putTransitionRoutes` <a name="putTransitionRoutes" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putTransitionRoutes"></a>

```typescript
public putTransitionRoutes(value: IResolvable | DialogflowCxPageTransitionRoutes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.putTransitionRoutes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes">DialogflowCxPageTransitionRoutes</a>[]

---

##### `resetEntryFulfillment` <a name="resetEntryFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetEntryFulfillment"></a>

```typescript
public resetEntryFulfillment(): void
```

##### `resetEventHandlers` <a name="resetEventHandlers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetEventHandlers"></a>

```typescript
public resetEventHandlers(): void
```

##### `resetForm` <a name="resetForm" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetForm"></a>

```typescript
public resetForm(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetLanguageCode"></a>

```typescript
public resetLanguageCode(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTransitionRouteGroups` <a name="resetTransitionRouteGroups" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetTransitionRouteGroups"></a>

```typescript
public resetTransitionRouteGroups(): void
```

##### `resetTransitionRoutes` <a name="resetTransitionRoutes" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.resetTransitionRoutes"></a>

```typescript
public resetTransitionRoutes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.isConstruct"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

dialogflowCxPage.DialogflowCxPage.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.isTerraformElement"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

dialogflowCxPage.DialogflowCxPage.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.isTerraformResource"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

dialogflowCxPage.DialogflowCxPage.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.entryFulfillment">entryFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference">DialogflowCxPageEntryFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.eventHandlers">eventHandlers</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList">DialogflowCxPageEventHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.form">form</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference">DialogflowCxPageFormOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference">DialogflowCxPageTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.transitionRoutes">transitionRoutes</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList">DialogflowCxPageTransitionRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.entryFulfillmentInput">entryFulfillmentInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment">DialogflowCxPageEntryFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.eventHandlersInput">eventHandlersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers">DialogflowCxPageEventHandlers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.formInput">formInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm">DialogflowCxPageForm</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts">DialogflowCxPageTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.transitionRouteGroupsInput">transitionRouteGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.transitionRoutesInput">transitionRoutesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes">DialogflowCxPageTransitionRoutes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.transitionRouteGroups">transitionRouteGroups</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `entryFulfillment`<sup>Required</sup> <a name="entryFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.entryFulfillment"></a>

```typescript
public readonly entryFulfillment: DialogflowCxPageEntryFulfillmentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference">DialogflowCxPageEntryFulfillmentOutputReference</a>

---

##### `eventHandlers`<sup>Required</sup> <a name="eventHandlers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.eventHandlers"></a>

```typescript
public readonly eventHandlers: DialogflowCxPageEventHandlersList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList">DialogflowCxPageEventHandlersList</a>

---

##### `form`<sup>Required</sup> <a name="form" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.form"></a>

```typescript
public readonly form: DialogflowCxPageFormOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference">DialogflowCxPageFormOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxPageTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference">DialogflowCxPageTimeoutsOutputReference</a>

---

##### `transitionRoutes`<sup>Required</sup> <a name="transitionRoutes" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.transitionRoutes"></a>

```typescript
public readonly transitionRoutes: DialogflowCxPageTransitionRoutesList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList">DialogflowCxPageTransitionRoutesList</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `entryFulfillmentInput`<sup>Optional</sup> <a name="entryFulfillmentInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.entryFulfillmentInput"></a>

```typescript
public readonly entryFulfillmentInput: DialogflowCxPageEntryFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment">DialogflowCxPageEntryFulfillment</a>

---

##### `eventHandlersInput`<sup>Optional</sup> <a name="eventHandlersInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.eventHandlersInput"></a>

```typescript
public readonly eventHandlersInput: IResolvable | DialogflowCxPageEventHandlers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers">DialogflowCxPageEventHandlers</a>[]

---

##### `formInput`<sup>Optional</sup> <a name="formInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.formInput"></a>

```typescript
public readonly formInput: DialogflowCxPageForm;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm">DialogflowCxPageForm</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: DialogflowCxPageTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts">DialogflowCxPageTimeouts</a> | cdktf.IResolvable

---

##### `transitionRouteGroupsInput`<sup>Optional</sup> <a name="transitionRouteGroupsInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.transitionRouteGroupsInput"></a>

```typescript
public readonly transitionRouteGroupsInput: string[];
```

- *Type:* string[]

---

##### `transitionRoutesInput`<sup>Optional</sup> <a name="transitionRoutesInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.transitionRoutesInput"></a>

```typescript
public readonly transitionRoutesInput: IResolvable | DialogflowCxPageTransitionRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes">DialogflowCxPageTransitionRoutes</a>[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `transitionRouteGroups`<sup>Required</sup> <a name="transitionRouteGroups" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.transitionRouteGroups"></a>

```typescript
public readonly transitionRouteGroups: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPage.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxPageConfig <a name="DialogflowCxPageConfig" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

const dialogflowCxPageConfig: dialogflowCxPage.DialogflowCxPageConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name of the page, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.entryFulfillment">entryFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment">DialogflowCxPageEntryFulfillment</a></code> | entry_fulfillment block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.eventHandlers">eventHandlers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers">DialogflowCxPageEventHandlers</a>[]</code> | event_handlers block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.form">form</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm">DialogflowCxPageForm</a></code> | form block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#id DialogflowCxPage#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.languageCode">languageCode</a></code> | <code>string</code> | The language of the following fields in page:. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.parent">parent</a></code> | <code>string</code> | The flow to create a page for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts">DialogflowCxPageTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.transitionRouteGroups">transitionRouteGroups</a></code> | <code>string[]</code> | Ordered list of TransitionRouteGroups associated with the page. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.transitionRoutes">transitionRoutes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes">DialogflowCxPageTransitionRoutes</a>[]</code> | transition_routes block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name of the page, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#display_name DialogflowCxPage#display_name}

---

##### `entryFulfillment`<sup>Optional</sup> <a name="entryFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.entryFulfillment"></a>

```typescript
public readonly entryFulfillment: DialogflowCxPageEntryFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment">DialogflowCxPageEntryFulfillment</a>

entry_fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#entry_fulfillment DialogflowCxPage#entry_fulfillment}

---

##### `eventHandlers`<sup>Optional</sup> <a name="eventHandlers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.eventHandlers"></a>

```typescript
public readonly eventHandlers: IResolvable | DialogflowCxPageEventHandlers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers">DialogflowCxPageEventHandlers</a>[]

event_handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#event_handlers DialogflowCxPage#event_handlers}

---

##### `form`<sup>Optional</sup> <a name="form" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.form"></a>

```typescript
public readonly form: DialogflowCxPageForm;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm">DialogflowCxPageForm</a>

form block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#form DialogflowCxPage#form}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#id DialogflowCxPage#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

The language of the following fields in page:.

Page.entry_fulfillment.messages
Page.entry_fulfillment.conditional_cases
Page.event_handlers.trigger_fulfillment.messages
Page.event_handlers.trigger_fulfillment.conditional_cases
Page.form.parameters.fill_behavior.initial_prompt_fulfillment.messages
Page.form.parameters.fill_behavior.initial_prompt_fulfillment.conditional_cases
Page.form.parameters.fill_behavior.reprompt_event_handlers.messages
Page.form.parameters.fill_behavior.reprompt_event_handlers.conditional_cases
Page.transition_routes.trigger_fulfillment.messages
Page.transition_routes.trigger_fulfillment.conditional_cases
If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#language_code DialogflowCxPage#language_code}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The flow to create a page for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#parent DialogflowCxPage#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxPageTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts">DialogflowCxPageTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#timeouts DialogflowCxPage#timeouts}

---

##### `transitionRouteGroups`<sup>Optional</sup> <a name="transitionRouteGroups" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.transitionRouteGroups"></a>

```typescript
public readonly transitionRouteGroups: string[];
```

- *Type:* string[]

Ordered list of TransitionRouteGroups associated with the page.

Transition route groups must be unique within a page.
If multiple transition routes within a page scope refer to the same intent, then the precedence order is: page's transition route -> page's transition route group -> flow's transition routes.
If multiple transition route groups within a page contain the same intent, then the first group in the ordered list takes precedence.
Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#transition_route_groups DialogflowCxPage#transition_route_groups}

---

##### `transitionRoutes`<sup>Optional</sup> <a name="transitionRoutes" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageConfig.property.transitionRoutes"></a>

```typescript
public readonly transitionRoutes: IResolvable | DialogflowCxPageTransitionRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes">DialogflowCxPageTransitionRoutes</a>[]

transition_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#transition_routes DialogflowCxPage#transition_routes}

---

### DialogflowCxPageEntryFulfillment <a name="DialogflowCxPageEntryFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

const dialogflowCxPageEntryFulfillment: dialogflowCxPage.DialogflowCxPageEntryFulfillment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment.property.messages">messages</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessages">DialogflowCxPageEntryFulfillmentMessages</a>[]</code> | messages block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment.property.returnPartialResponses">returnPartialResponses</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment.property.tag">tag</a></code> | <code>string</code> | The tag used by the webhook to identify which fulfillment is being called. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment.property.webhook">webhook</a></code> | <code>string</code> | The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>. |

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment.property.messages"></a>

```typescript
public readonly messages: IResolvable | DialogflowCxPageEntryFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessages">DialogflowCxPageEntryFulfillmentMessages</a>[]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#messages DialogflowCxPage#messages}

---

##### `returnPartialResponses`<sup>Optional</sup> <a name="returnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment.property.returnPartialResponses"></a>

```typescript
public readonly returnPartialResponses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#return_partial_responses DialogflowCxPage#return_partial_responses}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#tag DialogflowCxPage#tag}

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment.property.webhook"></a>

```typescript
public readonly webhook: string;
```

- *Type:* string

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#webhook DialogflowCxPage#webhook}

---

### DialogflowCxPageEntryFulfillmentMessages <a name="DialogflowCxPageEntryFulfillmentMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessages.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

const dialogflowCxPageEntryFulfillmentMessages: dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessages.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText">DialogflowCxPageEntryFulfillmentMessagesText</a></code> | text block. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessages.property.text"></a>

```typescript
public readonly text: DialogflowCxPageEntryFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText">DialogflowCxPageEntryFulfillmentMessagesText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}

---

### DialogflowCxPageEntryFulfillmentMessagesText <a name="DialogflowCxPageEntryFulfillmentMessagesText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

const dialogflowCxPageEntryFulfillmentMessagesText: dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText.property.text">text</a></code> | <code>string[]</code> | A collection of text responses. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText.property.text"></a>

```typescript
public readonly text: string[];
```

- *Type:* string[]

A collection of text responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}

---

### DialogflowCxPageEventHandlers <a name="DialogflowCxPageEventHandlers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

const dialogflowCxPageEventHandlers: dialogflowCxPage.DialogflowCxPageEventHandlers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers.property.event">event</a></code> | <code>string</code> | The name of the event to handle. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers.property.targetFlow">targetFlow</a></code> | <code>string</code> | The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers.property.targetPage">targetPage</a></code> | <code>string</code> | The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers.property.triggerFulfillment">triggerFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment">DialogflowCxPageEventHandlersTriggerFulfillment</a></code> | trigger_fulfillment block. |

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* string

The name of the event to handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#event DialogflowCxPage#event}

---

##### `targetFlow`<sup>Optional</sup> <a name="targetFlow" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers.property.targetFlow"></a>

```typescript
public readonly targetFlow: string;
```

- *Type:* string

The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#target_flow DialogflowCxPage#target_flow}

---

##### `targetPage`<sup>Optional</sup> <a name="targetPage" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers.property.targetPage"></a>

```typescript
public readonly targetPage: string;
```

- *Type:* string

The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#target_page DialogflowCxPage#target_page}

---

##### `triggerFulfillment`<sup>Optional</sup> <a name="triggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers.property.triggerFulfillment"></a>

```typescript
public readonly triggerFulfillment: DialogflowCxPageEventHandlersTriggerFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment">DialogflowCxPageEventHandlersTriggerFulfillment</a>

trigger_fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#trigger_fulfillment DialogflowCxPage#trigger_fulfillment}

---

### DialogflowCxPageEventHandlersTriggerFulfillment <a name="DialogflowCxPageEventHandlersTriggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

const dialogflowCxPageEventHandlersTriggerFulfillment: dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment.property.messages">messages</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessages">DialogflowCxPageEventHandlersTriggerFulfillmentMessages</a>[]</code> | messages block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment.property.returnPartialResponses">returnPartialResponses</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment.property.tag">tag</a></code> | <code>string</code> | The tag used by the webhook to identify which fulfillment is being called. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment.property.webhook">webhook</a></code> | <code>string</code> | The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>. |

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment.property.messages"></a>

```typescript
public readonly messages: IResolvable | DialogflowCxPageEventHandlersTriggerFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessages">DialogflowCxPageEventHandlersTriggerFulfillmentMessages</a>[]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#messages DialogflowCxPage#messages}

---

##### `returnPartialResponses`<sup>Optional</sup> <a name="returnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment.property.returnPartialResponses"></a>

```typescript
public readonly returnPartialResponses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#return_partial_responses DialogflowCxPage#return_partial_responses}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#tag DialogflowCxPage#tag}

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment.property.webhook"></a>

```typescript
public readonly webhook: string;
```

- *Type:* string

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#webhook DialogflowCxPage#webhook}

---

### DialogflowCxPageEventHandlersTriggerFulfillmentMessages <a name="DialogflowCxPageEventHandlersTriggerFulfillmentMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessages.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

const dialogflowCxPageEventHandlersTriggerFulfillmentMessages: dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessages.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a></code> | text block. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessages.property.text"></a>

```typescript
public readonly text: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}

---

### DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText <a name="DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

const dialogflowCxPageEventHandlersTriggerFulfillmentMessagesText: dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText.property.text">text</a></code> | <code>string[]</code> | A collection of text responses. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText.property.text"></a>

```typescript
public readonly text: string[];
```

- *Type:* string[]

A collection of text responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}

---

### DialogflowCxPageForm <a name="DialogflowCxPageForm" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

const dialogflowCxPageForm: dialogflowCxPage.DialogflowCxPageForm = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm.property.parameters">parameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters">DialogflowCxPageFormParameters</a>[]</code> | parameters block. |

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | DialogflowCxPageFormParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters">DialogflowCxPageFormParameters</a>[]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#parameters DialogflowCxPage#parameters}

---

### DialogflowCxPageFormParameters <a name="DialogflowCxPageFormParameters" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

const dialogflowCxPageFormParameters: dialogflowCxPage.DialogflowCxPageFormParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name of the parameter, unique within the form. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.entityType">entityType</a></code> | <code>string</code> | The entity type of the parameter. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.fillBehavior">fillBehavior</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior">DialogflowCxPageFormParametersFillBehavior</a></code> | fill_behavior block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.isList">isList</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the parameter represents a list of values. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.redact">redact</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the parameter content should be redacted in log. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the parameter is required. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name of the parameter, unique within the form.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#display_name DialogflowCxPage#display_name}

---

##### `entityType`<sup>Optional</sup> <a name="entityType" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

The entity type of the parameter.

Format: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#entity_type DialogflowCxPage#entity_type}

---

##### `fillBehavior`<sup>Optional</sup> <a name="fillBehavior" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.fillBehavior"></a>

```typescript
public readonly fillBehavior: DialogflowCxPageFormParametersFillBehavior;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior">DialogflowCxPageFormParametersFillBehavior</a>

fill_behavior block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#fill_behavior DialogflowCxPage#fill_behavior}

---

##### `isList`<sup>Optional</sup> <a name="isList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.isList"></a>

```typescript
public readonly isList: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the parameter represents a list of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#is_list DialogflowCxPage#is_list}

---

##### `redact`<sup>Optional</sup> <a name="redact" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.redact"></a>

```typescript
public readonly redact: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the parameter content should be redacted in log.

If redaction is enabled, the parameter content will be replaced by parameter name during logging. Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#redact DialogflowCxPage#redact}

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the parameter is required.

Optional parameters will not trigger prompts; however, they are filled if the user specifies them.
Required parameters must be filled before form filling concludes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#required DialogflowCxPage#required}

---

### DialogflowCxPageFormParametersFillBehavior <a name="DialogflowCxPageFormParametersFillBehavior" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

const dialogflowCxPageFormParametersFillBehavior: dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior.property.initialPromptFulfillment">initialPromptFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a></code> | initial_prompt_fulfillment block. |

---

##### `initialPromptFulfillment`<sup>Optional</sup> <a name="initialPromptFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior.property.initialPromptFulfillment"></a>

```typescript
public readonly initialPromptFulfillment: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a>

initial_prompt_fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#initial_prompt_fulfillment DialogflowCxPage#initial_prompt_fulfillment}

---

### DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment <a name="DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

const dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment: dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.messages">messages</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages</a>[]</code> | messages block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.returnPartialResponses">returnPartialResponses</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.tag">tag</a></code> | <code>string</code> | The tag used by the webhook to identify which fulfillment is being called. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.webhook">webhook</a></code> | <code>string</code> | The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>. |

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.messages"></a>

```typescript
public readonly messages: IResolvable | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages</a>[]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#messages DialogflowCxPage#messages}

---

##### `returnPartialResponses`<sup>Optional</sup> <a name="returnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.returnPartialResponses"></a>

```typescript
public readonly returnPartialResponses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#return_partial_responses DialogflowCxPage#return_partial_responses}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#tag DialogflowCxPage#tag}

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment.property.webhook"></a>

```typescript
public readonly webhook: string;
```

- *Type:* string

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#webhook DialogflowCxPage#webhook}

---

### DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages <a name="DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

const dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages: dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a></code> | text block. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages.property.text"></a>

```typescript
public readonly text: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}

---

### DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText <a name="DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

const dialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText: dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText.property.text">text</a></code> | <code>string[]</code> | A collection of text responses. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText.property.text"></a>

```typescript
public readonly text: string[];
```

- *Type:* string[]

A collection of text responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}

---

### DialogflowCxPageTimeouts <a name="DialogflowCxPageTimeouts" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

const dialogflowCxPageTimeouts: dialogflowCxPage.DialogflowCxPageTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#create DialogflowCxPage#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#delete DialogflowCxPage#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#update DialogflowCxPage#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#create DialogflowCxPage#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#delete DialogflowCxPage#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#update DialogflowCxPage#update}.

---

### DialogflowCxPageTransitionRoutes <a name="DialogflowCxPageTransitionRoutes" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

const dialogflowCxPageTransitionRoutes: dialogflowCxPage.DialogflowCxPageTransitionRoutes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.condition">condition</a></code> | <code>string</code> | The condition to evaluate against form parameters or session parameters. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.intent">intent</a></code> | <code>string</code> | The unique identifier of an Intent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.targetFlow">targetFlow</a></code> | <code>string</code> | The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.targetPage">targetPage</a></code> | <code>string</code> | The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.triggerFulfillment">triggerFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment">DialogflowCxPageTransitionRoutesTriggerFulfillment</a></code> | trigger_fulfillment block. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

The condition to evaluate against form parameters or session parameters.

At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#condition DialogflowCxPage#condition}

---

##### `intent`<sup>Optional</sup> <a name="intent" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.intent"></a>

```typescript
public readonly intent: string;
```

- *Type:* string

The unique identifier of an Intent.

Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. Indicates that the transition can only happen when the given intent is matched. At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#intent DialogflowCxPage#intent}

---

##### `targetFlow`<sup>Optional</sup> <a name="targetFlow" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.targetFlow"></a>

```typescript
public readonly targetFlow: string;
```

- *Type:* string

The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#target_flow DialogflowCxPage#target_flow}

---

##### `targetPage`<sup>Optional</sup> <a name="targetPage" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.targetPage"></a>

```typescript
public readonly targetPage: string;
```

- *Type:* string

The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#target_page DialogflowCxPage#target_page}

---

##### `triggerFulfillment`<sup>Optional</sup> <a name="triggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes.property.triggerFulfillment"></a>

```typescript
public readonly triggerFulfillment: DialogflowCxPageTransitionRoutesTriggerFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment">DialogflowCxPageTransitionRoutesTriggerFulfillment</a>

trigger_fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#trigger_fulfillment DialogflowCxPage#trigger_fulfillment}

---

### DialogflowCxPageTransitionRoutesTriggerFulfillment <a name="DialogflowCxPageTransitionRoutesTriggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

const dialogflowCxPageTransitionRoutesTriggerFulfillment: dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment.property.messages">messages</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages</a>[]</code> | messages block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment.property.returnPartialResponses">returnPartialResponses</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment.property.tag">tag</a></code> | <code>string</code> | The tag used by the webhook to identify which fulfillment is being called. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment.property.webhook">webhook</a></code> | <code>string</code> | The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>. |

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment.property.messages"></a>

```typescript
public readonly messages: IResolvable | DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages</a>[]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#messages DialogflowCxPage#messages}

---

##### `returnPartialResponses`<sup>Optional</sup> <a name="returnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment.property.returnPartialResponses"></a>

```typescript
public readonly returnPartialResponses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#return_partial_responses DialogflowCxPage#return_partial_responses}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#tag DialogflowCxPage#tag}

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment.property.webhook"></a>

```typescript
public readonly webhook: string;
```

- *Type:* string

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#webhook DialogflowCxPage#webhook}

---

### DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages <a name="DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

const dialogflowCxPageTransitionRoutesTriggerFulfillmentMessages: dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a></code> | text block. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages.property.text"></a>

```typescript
public readonly text: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}

---

### DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText <a name="DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

const dialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText: dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText.property.text">text</a></code> | <code>string[]</code> | A collection of text responses. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText.property.text"></a>

```typescript
public readonly text: string[];
```

- *Type:* string[]

A collection of text responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/dialogflow_cx_page#text DialogflowCxPage#text}

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxPageEntryFulfillmentMessagesList <a name="DialogflowCxPageEntryFulfillmentMessagesList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.get"></a>

```typescript
public get(index: number): DialogflowCxPageEntryFulfillmentMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessages">DialogflowCxPageEntryFulfillmentMessages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxPageEntryFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessages">DialogflowCxPageEntryFulfillmentMessages</a>[]

---


### DialogflowCxPageEntryFulfillmentMessagesOutputReference <a name="DialogflowCxPageEntryFulfillmentMessagesOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putText` <a name="putText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.putText"></a>

```typescript
public putText(value: DialogflowCxPageEntryFulfillmentMessagesText): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText">DialogflowCxPageEntryFulfillmentMessagesText</a>

---

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference">DialogflowCxPageEntryFulfillmentMessagesTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.textInput">textInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText">DialogflowCxPageEntryFulfillmentMessagesText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessages">DialogflowCxPageEntryFulfillmentMessages</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.text"></a>

```typescript
public readonly text: DialogflowCxPageEntryFulfillmentMessagesTextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference">DialogflowCxPageEntryFulfillmentMessagesTextOutputReference</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.textInput"></a>

```typescript
public readonly textInput: DialogflowCxPageEntryFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText">DialogflowCxPageEntryFulfillmentMessagesText</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPageEntryFulfillmentMessages | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessages">DialogflowCxPageEntryFulfillmentMessages</a> | cdktf.IResolvable

---


### DialogflowCxPageEntryFulfillmentMessagesTextOutputReference <a name="DialogflowCxPageEntryFulfillmentMessagesTextOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption">allowPlaybackInterruption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.textInput">textInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.text">text</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText">DialogflowCxPageEntryFulfillmentMessagesText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowPlaybackInterruption`<sup>Required</sup> <a name="allowPlaybackInterruption" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption"></a>

```typescript
public readonly allowPlaybackInterruption: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string[];
```

- *Type:* string[]

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.text"></a>

```typescript
public readonly text: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPageEntryFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesText">DialogflowCxPageEntryFulfillmentMessagesText</a>

---


### DialogflowCxPageEntryFulfillmentOutputReference <a name="DialogflowCxPageEntryFulfillmentOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.putMessages">putMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resetMessages">resetMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resetReturnPartialResponses">resetReturnPartialResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resetWebhook">resetWebhook</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessages` <a name="putMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.putMessages"></a>

```typescript
public putMessages(value: IResolvable | DialogflowCxPageEntryFulfillmentMessages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.putMessages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessages">DialogflowCxPageEntryFulfillmentMessages</a>[]

---

##### `resetMessages` <a name="resetMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resetMessages"></a>

```typescript
public resetMessages(): void
```

##### `resetReturnPartialResponses` <a name="resetReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resetReturnPartialResponses"></a>

```typescript
public resetReturnPartialResponses(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetWebhook` <a name="resetWebhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.resetWebhook"></a>

```typescript
public resetWebhook(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.messages">messages</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList">DialogflowCxPageEntryFulfillmentMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.messagesInput">messagesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessages">DialogflowCxPageEntryFulfillmentMessages</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.returnPartialResponsesInput">returnPartialResponsesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.webhookInput">webhookInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.returnPartialResponses">returnPartialResponses</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.webhook">webhook</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment">DialogflowCxPageEntryFulfillment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.messages"></a>

```typescript
public readonly messages: DialogflowCxPageEntryFulfillmentMessagesList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessagesList">DialogflowCxPageEntryFulfillmentMessagesList</a>

---

##### `messagesInput`<sup>Optional</sup> <a name="messagesInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.messagesInput"></a>

```typescript
public readonly messagesInput: IResolvable | DialogflowCxPageEntryFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentMessages">DialogflowCxPageEntryFulfillmentMessages</a>[]

---

##### `returnPartialResponsesInput`<sup>Optional</sup> <a name="returnPartialResponsesInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.returnPartialResponsesInput"></a>

```typescript
public readonly returnPartialResponsesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.webhookInput"></a>

```typescript
public readonly webhookInput: string;
```

- *Type:* string

---

##### `returnPartialResponses`<sup>Required</sup> <a name="returnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.returnPartialResponses"></a>

```typescript
public readonly returnPartialResponses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.webhook"></a>

```typescript
public readonly webhook: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPageEntryFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEntryFulfillment">DialogflowCxPageEntryFulfillment</a>

---


### DialogflowCxPageEventHandlersList <a name="DialogflowCxPageEventHandlersList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageEventHandlersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.get"></a>

```typescript
public get(index: number): DialogflowCxPageEventHandlersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers">DialogflowCxPageEventHandlers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxPageEventHandlers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers">DialogflowCxPageEventHandlers</a>[]

---


### DialogflowCxPageEventHandlersOutputReference <a name="DialogflowCxPageEventHandlersOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.putTriggerFulfillment">putTriggerFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resetEvent">resetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resetTargetFlow">resetTargetFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resetTargetPage">resetTargetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resetTriggerFulfillment">resetTriggerFulfillment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTriggerFulfillment` <a name="putTriggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.putTriggerFulfillment"></a>

```typescript
public putTriggerFulfillment(value: DialogflowCxPageEventHandlersTriggerFulfillment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.putTriggerFulfillment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment">DialogflowCxPageEventHandlersTriggerFulfillment</a>

---

##### `resetEvent` <a name="resetEvent" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resetEvent"></a>

```typescript
public resetEvent(): void
```

##### `resetTargetFlow` <a name="resetTargetFlow" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resetTargetFlow"></a>

```typescript
public resetTargetFlow(): void
```

##### `resetTargetPage` <a name="resetTargetPage" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resetTargetPage"></a>

```typescript
public resetTargetPage(): void
```

##### `resetTriggerFulfillment` <a name="resetTriggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.resetTriggerFulfillment"></a>

```typescript
public resetTriggerFulfillment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.triggerFulfillment">triggerFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference">DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.eventInput">eventInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.targetFlowInput">targetFlowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.targetPageInput">targetPageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.triggerFulfillmentInput">triggerFulfillmentInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment">DialogflowCxPageEventHandlersTriggerFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.event">event</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.targetFlow">targetFlow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.targetPage">targetPage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers">DialogflowCxPageEventHandlers</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `triggerFulfillment`<sup>Required</sup> <a name="triggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.triggerFulfillment"></a>

```typescript
public readonly triggerFulfillment: DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference">DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference</a>

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.eventInput"></a>

```typescript
public readonly eventInput: string;
```

- *Type:* string

---

##### `targetFlowInput`<sup>Optional</sup> <a name="targetFlowInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.targetFlowInput"></a>

```typescript
public readonly targetFlowInput: string;
```

- *Type:* string

---

##### `targetPageInput`<sup>Optional</sup> <a name="targetPageInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.targetPageInput"></a>

```typescript
public readonly targetPageInput: string;
```

- *Type:* string

---

##### `triggerFulfillmentInput`<sup>Optional</sup> <a name="triggerFulfillmentInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.triggerFulfillmentInput"></a>

```typescript
public readonly triggerFulfillmentInput: DialogflowCxPageEventHandlersTriggerFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment">DialogflowCxPageEventHandlersTriggerFulfillment</a>

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* string

---

##### `targetFlow`<sup>Required</sup> <a name="targetFlow" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.targetFlow"></a>

```typescript
public readonly targetFlow: string;
```

- *Type:* string

---

##### `targetPage`<sup>Required</sup> <a name="targetPage" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.targetPage"></a>

```typescript
public readonly targetPage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPageEventHandlers | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlers">DialogflowCxPageEventHandlers</a> | cdktf.IResolvable

---


### DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList <a name="DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.get"></a>

```typescript
public get(index: number): DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessages">DialogflowCxPageEventHandlersTriggerFulfillmentMessages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxPageEventHandlersTriggerFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessages">DialogflowCxPageEventHandlersTriggerFulfillmentMessages</a>[]

---


### DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference <a name="DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putText` <a name="putText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.putText"></a>

```typescript
public putText(value: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a>

---

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.textInput">textInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessages">DialogflowCxPageEventHandlersTriggerFulfillmentMessages</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.text"></a>

```typescript
public readonly text: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.textInput"></a>

```typescript
public readonly textInput: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPageEventHandlersTriggerFulfillmentMessages | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessages">DialogflowCxPageEventHandlersTriggerFulfillmentMessages</a> | cdktf.IResolvable

---


### DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference <a name="DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption">allowPlaybackInterruption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.textInput">textInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.text">text</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowPlaybackInterruption`<sup>Required</sup> <a name="allowPlaybackInterruption" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption"></a>

```typescript
public readonly allowPlaybackInterruption: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string[];
```

- *Type:* string[]

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.text"></a>

```typescript
public readonly text: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesText</a>

---


### DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference <a name="DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.putMessages">putMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetMessages">resetMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetReturnPartialResponses">resetReturnPartialResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetWebhook">resetWebhook</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessages` <a name="putMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.putMessages"></a>

```typescript
public putMessages(value: IResolvable | DialogflowCxPageEventHandlersTriggerFulfillmentMessages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.putMessages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessages">DialogflowCxPageEventHandlersTriggerFulfillmentMessages</a>[]

---

##### `resetMessages` <a name="resetMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetMessages"></a>

```typescript
public resetMessages(): void
```

##### `resetReturnPartialResponses` <a name="resetReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetReturnPartialResponses"></a>

```typescript
public resetReturnPartialResponses(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetWebhook` <a name="resetWebhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.resetWebhook"></a>

```typescript
public resetWebhook(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.messages">messages</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.messagesInput">messagesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessages">DialogflowCxPageEventHandlersTriggerFulfillmentMessages</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponsesInput">returnPartialResponsesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.webhookInput">webhookInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponses">returnPartialResponses</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.webhook">webhook</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment">DialogflowCxPageEventHandlersTriggerFulfillment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.messages"></a>

```typescript
public readonly messages: DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList">DialogflowCxPageEventHandlersTriggerFulfillmentMessagesList</a>

---

##### `messagesInput`<sup>Optional</sup> <a name="messagesInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.messagesInput"></a>

```typescript
public readonly messagesInput: IResolvable | DialogflowCxPageEventHandlersTriggerFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentMessages">DialogflowCxPageEventHandlersTriggerFulfillmentMessages</a>[]

---

##### `returnPartialResponsesInput`<sup>Optional</sup> <a name="returnPartialResponsesInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponsesInput"></a>

```typescript
public readonly returnPartialResponsesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.webhookInput"></a>

```typescript
public readonly webhookInput: string;
```

- *Type:* string

---

##### `returnPartialResponses`<sup>Required</sup> <a name="returnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponses"></a>

```typescript
public readonly returnPartialResponses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.webhook"></a>

```typescript
public readonly webhook: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPageEventHandlersTriggerFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageEventHandlersTriggerFulfillment">DialogflowCxPageEventHandlersTriggerFulfillment</a>

---


### DialogflowCxPageFormOutputReference <a name="DialogflowCxPageFormOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageFormOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParameters` <a name="putParameters" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.putParameters"></a>

```typescript
public putParameters(value: IResolvable | DialogflowCxPageFormParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.putParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters">DialogflowCxPageFormParameters</a>[]

---

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.resetParameters"></a>

```typescript
public resetParameters(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList">DialogflowCxPageFormParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.parametersInput">parametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters">DialogflowCxPageFormParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm">DialogflowCxPageForm</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.parameters"></a>

```typescript
public readonly parameters: DialogflowCxPageFormParametersList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList">DialogflowCxPageFormParametersList</a>

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | DialogflowCxPageFormParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters">DialogflowCxPageFormParameters</a>[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPageForm;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageForm">DialogflowCxPageForm</a>

---


### DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList <a name="DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.get"></a>

```typescript
public get(index: number): DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages</a>[]

---


### DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference <a name="DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putText` <a name="putText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.putText"></a>

```typescript
public putText(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a>

---

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.textInput">textInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.text"></a>

```typescript
public readonly text: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.textInput"></a>

```typescript
public readonly textInput: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages</a> | cdktf.IResolvable

---


### DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference <a name="DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption">allowPlaybackInterruption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.textInput">textInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.text">text</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowPlaybackInterruption`<sup>Required</sup> <a name="allowPlaybackInterruption" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption"></a>

```typescript
public readonly allowPlaybackInterruption: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string[];
```

- *Type:* string[]

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.text"></a>

```typescript
public readonly text: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesText</a>

---


### DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference <a name="DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.putMessages">putMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetMessages">resetMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetReturnPartialResponses">resetReturnPartialResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetWebhook">resetWebhook</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessages` <a name="putMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.putMessages"></a>

```typescript
public putMessages(value: IResolvable | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.putMessages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages</a>[]

---

##### `resetMessages` <a name="resetMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetMessages"></a>

```typescript
public resetMessages(): void
```

##### `resetReturnPartialResponses` <a name="resetReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetReturnPartialResponses"></a>

```typescript
public resetReturnPartialResponses(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetWebhook` <a name="resetWebhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.resetWebhook"></a>

```typescript
public resetWebhook(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.messages">messages</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.messagesInput">messagesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.returnPartialResponsesInput">returnPartialResponsesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.webhookInput">webhookInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.returnPartialResponses">returnPartialResponses</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.webhook">webhook</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.messages"></a>

```typescript
public readonly messages: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessagesList</a>

---

##### `messagesInput`<sup>Optional</sup> <a name="messagesInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.messagesInput"></a>

```typescript
public readonly messagesInput: IResolvable | DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentMessages</a>[]

---

##### `returnPartialResponsesInput`<sup>Optional</sup> <a name="returnPartialResponsesInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.returnPartialResponsesInput"></a>

```typescript
public readonly returnPartialResponsesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.webhookInput"></a>

```typescript
public readonly webhookInput: string;
```

- *Type:* string

---

##### `returnPartialResponses`<sup>Required</sup> <a name="returnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.returnPartialResponses"></a>

```typescript
public readonly returnPartialResponses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.webhook"></a>

```typescript
public readonly webhook: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a>

---


### DialogflowCxPageFormParametersFillBehaviorOutputReference <a name="DialogflowCxPageFormParametersFillBehaviorOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.putInitialPromptFulfillment">putInitialPromptFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.resetInitialPromptFulfillment">resetInitialPromptFulfillment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putInitialPromptFulfillment` <a name="putInitialPromptFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.putInitialPromptFulfillment"></a>

```typescript
public putInitialPromptFulfillment(value: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.putInitialPromptFulfillment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a>

---

##### `resetInitialPromptFulfillment` <a name="resetInitialPromptFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.resetInitialPromptFulfillment"></a>

```typescript
public resetInitialPromptFulfillment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.initialPromptFulfillment">initialPromptFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.initialPromptFulfillmentInput">initialPromptFulfillmentInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior">DialogflowCxPageFormParametersFillBehavior</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `initialPromptFulfillment`<sup>Required</sup> <a name="initialPromptFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.initialPromptFulfillment"></a>

```typescript
public readonly initialPromptFulfillment: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillmentOutputReference</a>

---

##### `initialPromptFulfillmentInput`<sup>Optional</sup> <a name="initialPromptFulfillmentInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.initialPromptFulfillmentInput"></a>

```typescript
public readonly initialPromptFulfillmentInput: DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment">DialogflowCxPageFormParametersFillBehaviorInitialPromptFulfillment</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPageFormParametersFillBehavior;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior">DialogflowCxPageFormParametersFillBehavior</a>

---


### DialogflowCxPageFormParametersList <a name="DialogflowCxPageFormParametersList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageFormParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.get"></a>

```typescript
public get(index: number): DialogflowCxPageFormParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters">DialogflowCxPageFormParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxPageFormParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters">DialogflowCxPageFormParameters</a>[]

---


### DialogflowCxPageFormParametersOutputReference <a name="DialogflowCxPageFormParametersOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageFormParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.putFillBehavior">putFillBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetEntityType">resetEntityType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetFillBehavior">resetFillBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetIsList">resetIsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetRedact">resetRedact</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetRequired">resetRequired</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFillBehavior` <a name="putFillBehavior" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.putFillBehavior"></a>

```typescript
public putFillBehavior(value: DialogflowCxPageFormParametersFillBehavior): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.putFillBehavior.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior">DialogflowCxPageFormParametersFillBehavior</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetEntityType` <a name="resetEntityType" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetEntityType"></a>

```typescript
public resetEntityType(): void
```

##### `resetFillBehavior` <a name="resetFillBehavior" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetFillBehavior"></a>

```typescript
public resetFillBehavior(): void
```

##### `resetIsList` <a name="resetIsList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetIsList"></a>

```typescript
public resetIsList(): void
```

##### `resetRedact` <a name="resetRedact" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetRedact"></a>

```typescript
public resetRedact(): void
```

##### `resetRequired` <a name="resetRequired" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.resetRequired"></a>

```typescript
public resetRequired(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.fillBehavior">fillBehavior</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference">DialogflowCxPageFormParametersFillBehaviorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.entityTypeInput">entityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.fillBehaviorInput">fillBehaviorInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior">DialogflowCxPageFormParametersFillBehavior</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.isListInput">isListInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.redactInput">redactInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.requiredInput">requiredInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.isList">isList</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.redact">redact</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.required">required</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters">DialogflowCxPageFormParameters</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fillBehavior`<sup>Required</sup> <a name="fillBehavior" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.fillBehavior"></a>

```typescript
public readonly fillBehavior: DialogflowCxPageFormParametersFillBehaviorOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehaviorOutputReference">DialogflowCxPageFormParametersFillBehaviorOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.entityTypeInput"></a>

```typescript
public readonly entityTypeInput: string;
```

- *Type:* string

---

##### `fillBehaviorInput`<sup>Optional</sup> <a name="fillBehaviorInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.fillBehaviorInput"></a>

```typescript
public readonly fillBehaviorInput: DialogflowCxPageFormParametersFillBehavior;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersFillBehavior">DialogflowCxPageFormParametersFillBehavior</a>

---

##### `isListInput`<sup>Optional</sup> <a name="isListInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.isListInput"></a>

```typescript
public readonly isListInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `redactInput`<sup>Optional</sup> <a name="redactInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.redactInput"></a>

```typescript
public readonly redactInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.requiredInput"></a>

```typescript
public readonly requiredInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `isList`<sup>Required</sup> <a name="isList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.isList"></a>

```typescript
public readonly isList: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `redact`<sup>Required</sup> <a name="redact" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.redact"></a>

```typescript
public readonly redact: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.required"></a>

```typescript
public readonly required: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPageFormParameters | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageFormParameters">DialogflowCxPageFormParameters</a> | cdktf.IResolvable

---


### DialogflowCxPageTimeoutsOutputReference <a name="DialogflowCxPageTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts">DialogflowCxPageTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPageTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTimeouts">DialogflowCxPageTimeouts</a> | cdktf.IResolvable

---


### DialogflowCxPageTransitionRoutesList <a name="DialogflowCxPageTransitionRoutesList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageTransitionRoutesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.get"></a>

```typescript
public get(index: number): DialogflowCxPageTransitionRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes">DialogflowCxPageTransitionRoutes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxPageTransitionRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes">DialogflowCxPageTransitionRoutes</a>[]

---


### DialogflowCxPageTransitionRoutesOutputReference <a name="DialogflowCxPageTransitionRoutesOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.putTriggerFulfillment">putTriggerFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetIntent">resetIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetTargetFlow">resetTargetFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetTargetPage">resetTargetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetTriggerFulfillment">resetTriggerFulfillment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTriggerFulfillment` <a name="putTriggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.putTriggerFulfillment"></a>

```typescript
public putTriggerFulfillment(value: DialogflowCxPageTransitionRoutesTriggerFulfillment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.putTriggerFulfillment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment">DialogflowCxPageTransitionRoutesTriggerFulfillment</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetIntent` <a name="resetIntent" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetIntent"></a>

```typescript
public resetIntent(): void
```

##### `resetTargetFlow` <a name="resetTargetFlow" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetTargetFlow"></a>

```typescript
public resetTargetFlow(): void
```

##### `resetTargetPage` <a name="resetTargetPage" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetTargetPage"></a>

```typescript
public resetTargetPage(): void
```

##### `resetTriggerFulfillment` <a name="resetTriggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.resetTriggerFulfillment"></a>

```typescript
public resetTriggerFulfillment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.triggerFulfillment">triggerFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference">DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.intentInput">intentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.targetFlowInput">targetFlowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.targetPageInput">targetPageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.triggerFulfillmentInput">triggerFulfillmentInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment">DialogflowCxPageTransitionRoutesTriggerFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.intent">intent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.targetFlow">targetFlow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.targetPage">targetPage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes">DialogflowCxPageTransitionRoutes</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `triggerFulfillment`<sup>Required</sup> <a name="triggerFulfillment" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.triggerFulfillment"></a>

```typescript
public readonly triggerFulfillment: DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference">DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `intentInput`<sup>Optional</sup> <a name="intentInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.intentInput"></a>

```typescript
public readonly intentInput: string;
```

- *Type:* string

---

##### `targetFlowInput`<sup>Optional</sup> <a name="targetFlowInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.targetFlowInput"></a>

```typescript
public readonly targetFlowInput: string;
```

- *Type:* string

---

##### `targetPageInput`<sup>Optional</sup> <a name="targetPageInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.targetPageInput"></a>

```typescript
public readonly targetPageInput: string;
```

- *Type:* string

---

##### `triggerFulfillmentInput`<sup>Optional</sup> <a name="triggerFulfillmentInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.triggerFulfillmentInput"></a>

```typescript
public readonly triggerFulfillmentInput: DialogflowCxPageTransitionRoutesTriggerFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment">DialogflowCxPageTransitionRoutesTriggerFulfillment</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.intent"></a>

```typescript
public readonly intent: string;
```

- *Type:* string

---

##### `targetFlow`<sup>Required</sup> <a name="targetFlow" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.targetFlow"></a>

```typescript
public readonly targetFlow: string;
```

- *Type:* string

---

##### `targetPage`<sup>Required</sup> <a name="targetPage" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.targetPage"></a>

```typescript
public readonly targetPage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPageTransitionRoutes | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutes">DialogflowCxPageTransitionRoutes</a> | cdktf.IResolvable

---


### DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList <a name="DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.get"></a>

```typescript
public get(index: number): DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages</a>[]

---


### DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference <a name="DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putText` <a name="putText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.putText"></a>

```typescript
public putText(value: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a>

---

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.textInput">textInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.text"></a>

```typescript
public readonly text: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.textInput"></a>

```typescript
public readonly textInput: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages</a> | cdktf.IResolvable

---


### DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference <a name="DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption">allowPlaybackInterruption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.textInput">textInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.text">text</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowPlaybackInterruption`<sup>Required</sup> <a name="allowPlaybackInterruption" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption"></a>

```typescript
public readonly allowPlaybackInterruption: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string[];
```

- *Type:* string[]

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.text"></a>

```typescript
public readonly text: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesText</a>

---


### DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference <a name="DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPage } from '@cdktf/provider-google'

new dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.putMessages">putMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetMessages">resetMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetReturnPartialResponses">resetReturnPartialResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetWebhook">resetWebhook</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessages` <a name="putMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.putMessages"></a>

```typescript
public putMessages(value: IResolvable | DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.putMessages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages</a>[]

---

##### `resetMessages` <a name="resetMessages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetMessages"></a>

```typescript
public resetMessages(): void
```

##### `resetReturnPartialResponses` <a name="resetReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetReturnPartialResponses"></a>

```typescript
public resetReturnPartialResponses(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetWebhook` <a name="resetWebhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.resetWebhook"></a>

```typescript
public resetWebhook(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.messages">messages</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.messagesInput">messagesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponsesInput">returnPartialResponsesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.webhookInput">webhookInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponses">returnPartialResponses</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.webhook">webhook</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment">DialogflowCxPageTransitionRoutesTriggerFulfillment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.messages"></a>

```typescript
public readonly messages: DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessagesList</a>

---

##### `messagesInput`<sup>Optional</sup> <a name="messagesInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.messagesInput"></a>

```typescript
public readonly messagesInput: IResolvable | DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages">DialogflowCxPageTransitionRoutesTriggerFulfillmentMessages</a>[]

---

##### `returnPartialResponsesInput`<sup>Optional</sup> <a name="returnPartialResponsesInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponsesInput"></a>

```typescript
public readonly returnPartialResponsesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.webhookInput"></a>

```typescript
public readonly webhookInput: string;
```

- *Type:* string

---

##### `returnPartialResponses`<sup>Required</sup> <a name="returnPartialResponses" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponses"></a>

```typescript
public readonly returnPartialResponses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.webhook"></a>

```typescript
public readonly webhook: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPageTransitionRoutesTriggerFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPage.DialogflowCxPageTransitionRoutesTriggerFulfillment">DialogflowCxPageTransitionRoutesTriggerFulfillment</a>

---



