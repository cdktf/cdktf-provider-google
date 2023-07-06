# `google_dialogflow_cx_flow`

Refer to the Terraform Registory for docs: [`google_dialogflow_cx_flow`](https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow).

# `dialogflowCxFlow` Submodule <a name="`dialogflowCxFlow` Submodule" id="@cdktf/provider-google.dialogflowCxFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxFlow <a name="DialogflowCxFlow" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow google_dialogflow_cx_flow}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlow(scope: Construct, id: string, config: DialogflowCxFlowConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig">DialogflowCxFlowConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig">DialogflowCxFlowConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.putEventHandlers">putEventHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.putNluSettings">putNluSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.putTransitionRoutes">putTransitionRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetEventHandlers">resetEventHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetNluSettings">resetNluSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetTransitionRouteGroups">resetTransitionRouteGroups</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetTransitionRoutes">resetTransitionRoutes</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putEventHandlers` <a name="putEventHandlers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.putEventHandlers"></a>

```typescript
public putEventHandlers(value: IResolvable | DialogflowCxFlowEventHandlers[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.putEventHandlers.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers">DialogflowCxFlowEventHandlers</a>[]

---

##### `putNluSettings` <a name="putNluSettings" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.putNluSettings"></a>

```typescript
public putNluSettings(value: DialogflowCxFlowNluSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.putNluSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings">DialogflowCxFlowNluSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.putTimeouts"></a>

```typescript
public putTimeouts(value: DialogflowCxFlowTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts">DialogflowCxFlowTimeouts</a>

---

##### `putTransitionRoutes` <a name="putTransitionRoutes" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.putTransitionRoutes"></a>

```typescript
public putTransitionRoutes(value: IResolvable | DialogflowCxFlowTransitionRoutes[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.putTransitionRoutes.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes">DialogflowCxFlowTransitionRoutes</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEventHandlers` <a name="resetEventHandlers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetEventHandlers"></a>

```typescript
public resetEventHandlers(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetId"></a>

```typescript
public resetId(): void
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetLanguageCode"></a>

```typescript
public resetLanguageCode(): void
```

##### `resetNluSettings` <a name="resetNluSettings" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetNluSettings"></a>

```typescript
public resetNluSettings(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTransitionRouteGroups` <a name="resetTransitionRouteGroups" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetTransitionRouteGroups"></a>

```typescript
public resetTransitionRouteGroups(): void
```

##### `resetTransitionRoutes` <a name="resetTransitionRoutes" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetTransitionRoutes"></a>

```typescript
public resetTransitionRoutes(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.isConstruct"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

dialogflowCxFlow.DialogflowCxFlow.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.isTerraformElement"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

dialogflowCxFlow.DialogflowCxFlow.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.isTerraformResource"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

dialogflowCxFlow.DialogflowCxFlow.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.eventHandlers">eventHandlers</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList">DialogflowCxFlowEventHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.nluSettings">nluSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference">DialogflowCxFlowNluSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference">DialogflowCxFlowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.transitionRoutes">transitionRoutes</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList">DialogflowCxFlowTransitionRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.eventHandlersInput">eventHandlersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers">DialogflowCxFlowEventHandlers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.nluSettingsInput">nluSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings">DialogflowCxFlowNluSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts">DialogflowCxFlowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.transitionRouteGroupsInput">transitionRouteGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.transitionRoutesInput">transitionRoutesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes">DialogflowCxFlowTransitionRoutes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.transitionRouteGroups">transitionRouteGroups</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `eventHandlers`<sup>Required</sup> <a name="eventHandlers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.eventHandlers"></a>

```typescript
public readonly eventHandlers: DialogflowCxFlowEventHandlersList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList">DialogflowCxFlowEventHandlersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `nluSettings`<sup>Required</sup> <a name="nluSettings" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.nluSettings"></a>

```typescript
public readonly nluSettings: DialogflowCxFlowNluSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference">DialogflowCxFlowNluSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxFlowTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference">DialogflowCxFlowTimeoutsOutputReference</a>

---

##### `transitionRoutes`<sup>Required</sup> <a name="transitionRoutes" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.transitionRoutes"></a>

```typescript
public readonly transitionRoutes: DialogflowCxFlowTransitionRoutesList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList">DialogflowCxFlowTransitionRoutesList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `eventHandlersInput`<sup>Optional</sup> <a name="eventHandlersInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.eventHandlersInput"></a>

```typescript
public readonly eventHandlersInput: IResolvable | DialogflowCxFlowEventHandlers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers">DialogflowCxFlowEventHandlers</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `nluSettingsInput`<sup>Optional</sup> <a name="nluSettingsInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.nluSettingsInput"></a>

```typescript
public readonly nluSettingsInput: DialogflowCxFlowNluSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings">DialogflowCxFlowNluSettings</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DialogflowCxFlowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts">DialogflowCxFlowTimeouts</a>

---

##### `transitionRouteGroupsInput`<sup>Optional</sup> <a name="transitionRouteGroupsInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.transitionRouteGroupsInput"></a>

```typescript
public readonly transitionRouteGroupsInput: string[];
```

- *Type:* string[]

---

##### `transitionRoutesInput`<sup>Optional</sup> <a name="transitionRoutesInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.transitionRoutesInput"></a>

```typescript
public readonly transitionRoutesInput: IResolvable | DialogflowCxFlowTransitionRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes">DialogflowCxFlowTransitionRoutes</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `transitionRouteGroups`<sup>Required</sup> <a name="transitionRouteGroups" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.transitionRouteGroups"></a>

```typescript
public readonly transitionRouteGroups: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxFlowConfig <a name="DialogflowCxFlowConfig" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowConfig: dialogflowCxFlow.DialogflowCxFlowConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name of the flow. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.description">description</a></code> | <code>string</code> | The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.eventHandlers">eventHandlers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers">DialogflowCxFlowEventHandlers</a>[]</code> | event_handlers block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#id DialogflowCxFlow#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.languageCode">languageCode</a></code> | <code>string</code> | The language of the following fields in flow: Flow.event_handlers.trigger_fulfillment.messages Flow.event_handlers.trigger_fulfillment.conditional_cases Flow.transition_routes.trigger_fulfillment.messages Flow.transition_routes.trigger_fulfillment.conditional_cases If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.nluSettings">nluSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings">DialogflowCxFlowNluSettings</a></code> | nlu_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.parent">parent</a></code> | <code>string</code> | The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts">DialogflowCxFlowTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.transitionRouteGroups">transitionRouteGroups</a></code> | <code>string[]</code> | A flow's transition route group serve two purposes: They are responsible for matching the user's first utterances in the flow. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.transitionRoutes">transitionRoutes</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes">DialogflowCxFlowTransitionRoutes</a>[]</code> | transition_routes block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name of the flow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#display_name DialogflowCxFlow#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#description DialogflowCxFlow#description}

---

##### `eventHandlers`<sup>Optional</sup> <a name="eventHandlers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.eventHandlers"></a>

```typescript
public readonly eventHandlers: IResolvable | DialogflowCxFlowEventHandlers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers">DialogflowCxFlowEventHandlers</a>[]

event_handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#event_handlers DialogflowCxFlow#event_handlers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#id DialogflowCxFlow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

The language of the following fields in flow: Flow.event_handlers.trigger_fulfillment.messages Flow.event_handlers.trigger_fulfillment.conditional_cases Flow.transition_routes.trigger_fulfillment.messages Flow.transition_routes.trigger_fulfillment.conditional_cases If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#language_code DialogflowCxFlow#language_code}

---

##### `nluSettings`<sup>Optional</sup> <a name="nluSettings" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.nluSettings"></a>

```typescript
public readonly nluSettings: DialogflowCxFlowNluSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings">DialogflowCxFlowNluSettings</a>

nlu_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#nlu_settings DialogflowCxFlow#nlu_settings}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#parent DialogflowCxFlow#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxFlowTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts">DialogflowCxFlowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#timeouts DialogflowCxFlow#timeouts}

---

##### `transitionRouteGroups`<sup>Optional</sup> <a name="transitionRouteGroups" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.transitionRouteGroups"></a>

```typescript
public readonly transitionRouteGroups: string[];
```

- *Type:* string[]

A flow's transition route group serve two purposes: They are responsible for matching the user's first utterances in the flow.

They are inherited by every page's [transition route groups][Page.transition_route_groups]. Transition route groups defined in the page have higher priority than those defined in the flow.
Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#transition_route_groups DialogflowCxFlow#transition_route_groups}

---

##### `transitionRoutes`<sup>Optional</sup> <a name="transitionRoutes" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.transitionRoutes"></a>

```typescript
public readonly transitionRoutes: IResolvable | DialogflowCxFlowTransitionRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes">DialogflowCxFlowTransitionRoutes</a>[]

transition_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#transition_routes DialogflowCxFlow#transition_routes}

---

### DialogflowCxFlowEventHandlers <a name="DialogflowCxFlowEventHandlers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowEventHandlers: dialogflowCxFlow.DialogflowCxFlowEventHandlers = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers.property.event">event</a></code> | <code>string</code> | The name of the event to handle. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers.property.targetFlow">targetFlow</a></code> | <code>string</code> | The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers.property.targetPage">targetPage</a></code> | <code>string</code> | The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers.property.triggerFulfillment">triggerFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment">DialogflowCxFlowEventHandlersTriggerFulfillment</a></code> | trigger_fulfillment block. |

---

##### `event`<sup>Optional</sup> <a name="event" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* string

The name of the event to handle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#event DialogflowCxFlow#event}

---

##### `targetFlow`<sup>Optional</sup> <a name="targetFlow" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers.property.targetFlow"></a>

```typescript
public readonly targetFlow: string;
```

- *Type:* string

The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#target_flow DialogflowCxFlow#target_flow}

---

##### `targetPage`<sup>Optional</sup> <a name="targetPage" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers.property.targetPage"></a>

```typescript
public readonly targetPage: string;
```

- *Type:* string

The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#target_page DialogflowCxFlow#target_page}

---

##### `triggerFulfillment`<sup>Optional</sup> <a name="triggerFulfillment" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers.property.triggerFulfillment"></a>

```typescript
public readonly triggerFulfillment: DialogflowCxFlowEventHandlersTriggerFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment">DialogflowCxFlowEventHandlersTriggerFulfillment</a>

trigger_fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#trigger_fulfillment DialogflowCxFlow#trigger_fulfillment}

---

### DialogflowCxFlowEventHandlersTriggerFulfillment <a name="DialogflowCxFlowEventHandlersTriggerFulfillment" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowEventHandlersTriggerFulfillment: dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.messages">messages</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages">DialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>[]</code> | messages block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.returnPartialResponses">returnPartialResponses</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.tag">tag</a></code> | <code>string</code> | The tag used by the webhook to identify which fulfillment is being called. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.webhook">webhook</a></code> | <code>string</code> | The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>. |

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.messages"></a>

```typescript
public readonly messages: IResolvable | DialogflowCxFlowEventHandlersTriggerFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages">DialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>[]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#messages DialogflowCxFlow#messages}

---

##### `returnPartialResponses`<sup>Optional</sup> <a name="returnPartialResponses" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.returnPartialResponses"></a>

```typescript
public readonly returnPartialResponses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#return_partial_responses DialogflowCxFlow#return_partial_responses}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#tag DialogflowCxFlow#tag}

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.webhook"></a>

```typescript
public readonly webhook: string;
```

- *Type:* string

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#webhook DialogflowCxFlow#webhook}

---

### DialogflowCxFlowEventHandlersTriggerFulfillmentMessages <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentMessages" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowEventHandlersTriggerFulfillmentMessages: dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText</a></code> | text block. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.text"></a>

```typescript
public readonly text: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#text DialogflowCxFlow#text}

---

### DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText: dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText.property.text">text</a></code> | <code>string[]</code> | A collection of text responses. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText.property.text"></a>

```typescript
public readonly text: string[];
```

- *Type:* string[]

A collection of text responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#text DialogflowCxFlow#text}

---

### DialogflowCxFlowNluSettings <a name="DialogflowCxFlowNluSettings" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowNluSettings: dialogflowCxFlow.DialogflowCxFlowNluSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings.property.classificationThreshold">classificationThreshold</a></code> | <code>number</code> | To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings.property.modelTrainingMode">modelTrainingMode</a></code> | <code>string</code> | Indicates NLU model training mode. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings.property.modelType">modelType</a></code> | <code>string</code> | Indicates the type of NLU model. MODEL_TYPE_STANDARD: Use standard NLU model. MODEL_TYPE_ADVANCED: Use advanced NLU model. Possible values: ["MODEL_TYPE_STANDARD", "MODEL_TYPE_ADVANCED"]. |

---

##### `classificationThreshold`<sup>Optional</sup> <a name="classificationThreshold" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings.property.classificationThreshold"></a>

```typescript
public readonly classificationThreshold: number;
```

- *Type:* number

To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold.

If the returned score value is less than the threshold value, then a no-match event will be triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#classification_threshold DialogflowCxFlow#classification_threshold}

---

##### `modelTrainingMode`<sup>Optional</sup> <a name="modelTrainingMode" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings.property.modelTrainingMode"></a>

```typescript
public readonly modelTrainingMode: string;
```

- *Type:* string

Indicates NLU model training mode.

MODEL_TRAINING_MODE_AUTOMATIC: NLU model training is automatically triggered when a flow gets modified. User can also manually trigger model training in this mode.
MODEL_TRAINING_MODE_MANUAL: User needs to manually trigger NLU model training. Best for large flows whose models take long time to train. Possible values: ["MODEL_TRAINING_MODE_AUTOMATIC", "MODEL_TRAINING_MODE_MANUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#model_training_mode DialogflowCxFlow#model_training_mode}

---

##### `modelType`<sup>Optional</sup> <a name="modelType" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings.property.modelType"></a>

```typescript
public readonly modelType: string;
```

- *Type:* string

Indicates the type of NLU model. MODEL_TYPE_STANDARD: Use standard NLU model. MODEL_TYPE_ADVANCED: Use advanced NLU model. Possible values: ["MODEL_TYPE_STANDARD", "MODEL_TYPE_ADVANCED"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#model_type DialogflowCxFlow#model_type}

---

### DialogflowCxFlowTimeouts <a name="DialogflowCxFlowTimeouts" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowTimeouts: dialogflowCxFlow.DialogflowCxFlowTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#create DialogflowCxFlow#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#delete DialogflowCxFlow#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#update DialogflowCxFlow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#create DialogflowCxFlow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#delete DialogflowCxFlow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#update DialogflowCxFlow#update}.

---

### DialogflowCxFlowTransitionRoutes <a name="DialogflowCxFlowTransitionRoutes" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowTransitionRoutes: dialogflowCxFlow.DialogflowCxFlowTransitionRoutes = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes.property.condition">condition</a></code> | <code>string</code> | The condition to evaluate against form parameters or session parameters. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes.property.intent">intent</a></code> | <code>string</code> | The unique identifier of an Intent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes.property.targetFlow">targetFlow</a></code> | <code>string</code> | The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes.property.targetPage">targetPage</a></code> | <code>string</code> | The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes.property.triggerFulfillment">triggerFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment">DialogflowCxFlowTransitionRoutesTriggerFulfillment</a></code> | trigger_fulfillment block. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

The condition to evaluate against form parameters or session parameters.

At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#condition DialogflowCxFlow#condition}

---

##### `intent`<sup>Optional</sup> <a name="intent" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes.property.intent"></a>

```typescript
public readonly intent: string;
```

- *Type:* string

The unique identifier of an Intent.

Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. Indicates that the transition can only happen when the given intent is matched. At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#intent DialogflowCxFlow#intent}

---

##### `targetFlow`<sup>Optional</sup> <a name="targetFlow" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes.property.targetFlow"></a>

```typescript
public readonly targetFlow: string;
```

- *Type:* string

The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#target_flow DialogflowCxFlow#target_flow}

---

##### `targetPage`<sup>Optional</sup> <a name="targetPage" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes.property.targetPage"></a>

```typescript
public readonly targetPage: string;
```

- *Type:* string

The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#target_page DialogflowCxFlow#target_page}

---

##### `triggerFulfillment`<sup>Optional</sup> <a name="triggerFulfillment" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes.property.triggerFulfillment"></a>

```typescript
public readonly triggerFulfillment: DialogflowCxFlowTransitionRoutesTriggerFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment">DialogflowCxFlowTransitionRoutesTriggerFulfillment</a>

trigger_fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#trigger_fulfillment DialogflowCxFlow#trigger_fulfillment}

---

### DialogflowCxFlowTransitionRoutesTriggerFulfillment <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillment" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowTransitionRoutesTriggerFulfillment: dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.messages">messages</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>[]</code> | messages block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.returnPartialResponses">returnPartialResponses</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.tag">tag</a></code> | <code>string</code> | The tag used by the webhook to identify which fulfillment is being called. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.webhook">webhook</a></code> | <code>string</code> | The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>. |

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.messages"></a>

```typescript
public readonly messages: IResolvable | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>[]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#messages DialogflowCxFlow#messages}

---

##### `returnPartialResponses`<sup>Optional</sup> <a name="returnPartialResponses" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.returnPartialResponses"></a>

```typescript
public readonly returnPartialResponses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#return_partial_responses DialogflowCxFlow#return_partial_responses}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#tag DialogflowCxFlow#tag}

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.webhook"></a>

```typescript
public readonly webhook: string;
```

- *Type:* string

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#webhook DialogflowCxFlow#webhook}

---

### DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages: dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText</a></code> | text block. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.text"></a>

```typescript
public readonly text: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#text DialogflowCxFlow#text}

---

### DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText: dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText.property.text">text</a></code> | <code>string[]</code> | A collection of text responses. |

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText.property.text"></a>

```typescript
public readonly text: string[];
```

- *Type:* string[]

A collection of text responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.72.1/docs/resources/dialogflow_cx_flow#text DialogflowCxFlow#text}

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxFlowEventHandlersList <a name="DialogflowCxFlowEventHandlersList" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowEventHandlersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.get"></a>

```typescript
public get(index: number): DialogflowCxFlowEventHandlersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers">DialogflowCxFlowEventHandlers</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxFlowEventHandlers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers">DialogflowCxFlowEventHandlers</a>[]

---


### DialogflowCxFlowEventHandlersOutputReference <a name="DialogflowCxFlowEventHandlersOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.putTriggerFulfillment">putTriggerFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.resetEvent">resetEvent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.resetTargetFlow">resetTargetFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.resetTargetPage">resetTargetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.resetTriggerFulfillment">resetTriggerFulfillment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTriggerFulfillment` <a name="putTriggerFulfillment" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.putTriggerFulfillment"></a>

```typescript
public putTriggerFulfillment(value: DialogflowCxFlowEventHandlersTriggerFulfillment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.putTriggerFulfillment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment">DialogflowCxFlowEventHandlersTriggerFulfillment</a>

---

##### `resetEvent` <a name="resetEvent" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.resetEvent"></a>

```typescript
public resetEvent(): void
```

##### `resetTargetFlow` <a name="resetTargetFlow" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.resetTargetFlow"></a>

```typescript
public resetTargetFlow(): void
```

##### `resetTargetPage` <a name="resetTargetPage" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.resetTargetPage"></a>

```typescript
public resetTargetPage(): void
```

##### `resetTriggerFulfillment` <a name="resetTriggerFulfillment" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.resetTriggerFulfillment"></a>

```typescript
public resetTriggerFulfillment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.triggerFulfillment">triggerFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference">DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.eventInput">eventInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.targetFlowInput">targetFlowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.targetPageInput">targetPageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.triggerFulfillmentInput">triggerFulfillmentInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment">DialogflowCxFlowEventHandlersTriggerFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.event">event</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.targetFlow">targetFlow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.targetPage">targetPage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers">DialogflowCxFlowEventHandlers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `triggerFulfillment`<sup>Required</sup> <a name="triggerFulfillment" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.triggerFulfillment"></a>

```typescript
public readonly triggerFulfillment: DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference">DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference</a>

---

##### `eventInput`<sup>Optional</sup> <a name="eventInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.eventInput"></a>

```typescript
public readonly eventInput: string;
```

- *Type:* string

---

##### `targetFlowInput`<sup>Optional</sup> <a name="targetFlowInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.targetFlowInput"></a>

```typescript
public readonly targetFlowInput: string;
```

- *Type:* string

---

##### `targetPageInput`<sup>Optional</sup> <a name="targetPageInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.targetPageInput"></a>

```typescript
public readonly targetPageInput: string;
```

- *Type:* string

---

##### `triggerFulfillmentInput`<sup>Optional</sup> <a name="triggerFulfillmentInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.triggerFulfillmentInput"></a>

```typescript
public readonly triggerFulfillmentInput: DialogflowCxFlowEventHandlersTriggerFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment">DialogflowCxFlowEventHandlersTriggerFulfillment</a>

---

##### `event`<sup>Required</sup> <a name="event" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.event"></a>

```typescript
public readonly event: string;
```

- *Type:* string

---

##### `targetFlow`<sup>Required</sup> <a name="targetFlow" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.targetFlow"></a>

```typescript
public readonly targetFlow: string;
```

- *Type:* string

---

##### `targetPage`<sup>Required</sup> <a name="targetPage" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.targetPage"></a>

```typescript
public readonly targetPage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxFlowEventHandlers;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers">DialogflowCxFlowEventHandlers</a>

---


### DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.get"></a>

```typescript
public get(index: number): DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages">DialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxFlowEventHandlersTriggerFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages">DialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>[]

---


### DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putText` <a name="putText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putText"></a>

```typescript
public putText(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText</a>

---

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.textInput">textInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages">DialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.text"></a>

```typescript
public readonly text: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.textInput"></a>

```typescript
public readonly textInput: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxFlowEventHandlersTriggerFulfillmentMessages;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages">DialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>

---


### DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption">allowPlaybackInterruption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.textInput">textInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.text">text</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowPlaybackInterruption`<sup>Required</sup> <a name="allowPlaybackInterruption" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption"></a>

```typescript
public readonly allowPlaybackInterruption: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string[];
```

- *Type:* string[]

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.text"></a>

```typescript
public readonly text: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText</a>

---


### DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putMessages">putMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetMessages">resetMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetReturnPartialResponses">resetReturnPartialResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetWebhook">resetWebhook</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessages` <a name="putMessages" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putMessages"></a>

```typescript
public putMessages(value: IResolvable | DialogflowCxFlowEventHandlersTriggerFulfillmentMessages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putMessages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages">DialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>[]

---

##### `resetMessages` <a name="resetMessages" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetMessages"></a>

```typescript
public resetMessages(): void
```

##### `resetReturnPartialResponses` <a name="resetReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetReturnPartialResponses"></a>

```typescript
public resetReturnPartialResponses(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetWebhook` <a name="resetWebhook" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetWebhook"></a>

```typescript
public resetWebhook(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.messages">messages</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.messagesInput">messagesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages">DialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponsesInput">returnPartialResponsesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.webhookInput">webhookInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponses">returnPartialResponses</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.webhook">webhook</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment">DialogflowCxFlowEventHandlersTriggerFulfillment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.messages"></a>

```typescript
public readonly messages: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList</a>

---

##### `messagesInput`<sup>Optional</sup> <a name="messagesInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.messagesInput"></a>

```typescript
public readonly messagesInput: IResolvable | DialogflowCxFlowEventHandlersTriggerFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages">DialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>[]

---

##### `returnPartialResponsesInput`<sup>Optional</sup> <a name="returnPartialResponsesInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponsesInput"></a>

```typescript
public readonly returnPartialResponsesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.webhookInput"></a>

```typescript
public readonly webhookInput: string;
```

- *Type:* string

---

##### `returnPartialResponses`<sup>Required</sup> <a name="returnPartialResponses" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponses"></a>

```typescript
public readonly returnPartialResponses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.webhook"></a>

```typescript
public readonly webhook: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxFlowEventHandlersTriggerFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment">DialogflowCxFlowEventHandlersTriggerFulfillment</a>

---


### DialogflowCxFlowNluSettingsOutputReference <a name="DialogflowCxFlowNluSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.resetClassificationThreshold">resetClassificationThreshold</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.resetModelTrainingMode">resetModelTrainingMode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.resetModelType">resetModelType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassificationThreshold` <a name="resetClassificationThreshold" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.resetClassificationThreshold"></a>

```typescript
public resetClassificationThreshold(): void
```

##### `resetModelTrainingMode` <a name="resetModelTrainingMode" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.resetModelTrainingMode"></a>

```typescript
public resetModelTrainingMode(): void
```

##### `resetModelType` <a name="resetModelType" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.resetModelType"></a>

```typescript
public resetModelType(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.property.classificationThresholdInput">classificationThresholdInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.property.modelTrainingModeInput">modelTrainingModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.property.modelTypeInput">modelTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.property.classificationThreshold">classificationThreshold</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.property.modelTrainingMode">modelTrainingMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.property.modelType">modelType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings">DialogflowCxFlowNluSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `classificationThresholdInput`<sup>Optional</sup> <a name="classificationThresholdInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.property.classificationThresholdInput"></a>

```typescript
public readonly classificationThresholdInput: number;
```

- *Type:* number

---

##### `modelTrainingModeInput`<sup>Optional</sup> <a name="modelTrainingModeInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.property.modelTrainingModeInput"></a>

```typescript
public readonly modelTrainingModeInput: string;
```

- *Type:* string

---

##### `modelTypeInput`<sup>Optional</sup> <a name="modelTypeInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.property.modelTypeInput"></a>

```typescript
public readonly modelTypeInput: string;
```

- *Type:* string

---

##### `classificationThreshold`<sup>Required</sup> <a name="classificationThreshold" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.property.classificationThreshold"></a>

```typescript
public readonly classificationThreshold: number;
```

- *Type:* number

---

##### `modelTrainingMode`<sup>Required</sup> <a name="modelTrainingMode" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.property.modelTrainingMode"></a>

```typescript
public readonly modelTrainingMode: string;
```

- *Type:* string

---

##### `modelType`<sup>Required</sup> <a name="modelType" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.property.modelType"></a>

```typescript
public readonly modelType: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxFlowNluSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings">DialogflowCxFlowNluSettings</a>

---


### DialogflowCxFlowTimeoutsOutputReference <a name="DialogflowCxFlowTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts">DialogflowCxFlowTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxFlowTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts">DialogflowCxFlowTimeouts</a>

---


### DialogflowCxFlowTransitionRoutesList <a name="DialogflowCxFlowTransitionRoutesList" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.get"></a>

```typescript
public get(index: number): DialogflowCxFlowTransitionRoutesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes">DialogflowCxFlowTransitionRoutes</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxFlowTransitionRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes">DialogflowCxFlowTransitionRoutes</a>[]

---


### DialogflowCxFlowTransitionRoutesOutputReference <a name="DialogflowCxFlowTransitionRoutesOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.putTriggerFulfillment">putTriggerFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.resetIntent">resetIntent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.resetTargetFlow">resetTargetFlow</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.resetTargetPage">resetTargetPage</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.resetTriggerFulfillment">resetTriggerFulfillment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTriggerFulfillment` <a name="putTriggerFulfillment" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.putTriggerFulfillment"></a>

```typescript
public putTriggerFulfillment(value: DialogflowCxFlowTransitionRoutesTriggerFulfillment): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.putTriggerFulfillment.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment">DialogflowCxFlowTransitionRoutesTriggerFulfillment</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.resetCondition"></a>

```typescript
public resetCondition(): void
```

##### `resetIntent` <a name="resetIntent" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.resetIntent"></a>

```typescript
public resetIntent(): void
```

##### `resetTargetFlow` <a name="resetTargetFlow" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.resetTargetFlow"></a>

```typescript
public resetTargetFlow(): void
```

##### `resetTargetPage` <a name="resetTargetPage" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.resetTargetPage"></a>

```typescript
public resetTargetPage(): void
```

##### `resetTriggerFulfillment` <a name="resetTriggerFulfillment" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.resetTriggerFulfillment"></a>

```typescript
public resetTriggerFulfillment(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.triggerFulfillment">triggerFulfillment</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference">DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.conditionInput">conditionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.intentInput">intentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.targetFlowInput">targetFlowInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.targetPageInput">targetPageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.triggerFulfillmentInput">triggerFulfillmentInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment">DialogflowCxFlowTransitionRoutesTriggerFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.condition">condition</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.intent">intent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.targetFlow">targetFlow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.targetPage">targetPage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes">DialogflowCxFlowTransitionRoutes</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `triggerFulfillment`<sup>Required</sup> <a name="triggerFulfillment" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.triggerFulfillment"></a>

```typescript
public readonly triggerFulfillment: DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference">DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.conditionInput"></a>

```typescript
public readonly conditionInput: string;
```

- *Type:* string

---

##### `intentInput`<sup>Optional</sup> <a name="intentInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.intentInput"></a>

```typescript
public readonly intentInput: string;
```

- *Type:* string

---

##### `targetFlowInput`<sup>Optional</sup> <a name="targetFlowInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.targetFlowInput"></a>

```typescript
public readonly targetFlowInput: string;
```

- *Type:* string

---

##### `targetPageInput`<sup>Optional</sup> <a name="targetPageInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.targetPageInput"></a>

```typescript
public readonly targetPageInput: string;
```

- *Type:* string

---

##### `triggerFulfillmentInput`<sup>Optional</sup> <a name="triggerFulfillmentInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.triggerFulfillmentInput"></a>

```typescript
public readonly triggerFulfillmentInput: DialogflowCxFlowTransitionRoutesTriggerFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment">DialogflowCxFlowTransitionRoutesTriggerFulfillment</a>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.condition"></a>

```typescript
public readonly condition: string;
```

- *Type:* string

---

##### `intent`<sup>Required</sup> <a name="intent" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.intent"></a>

```typescript
public readonly intent: string;
```

- *Type:* string

---

##### `targetFlow`<sup>Required</sup> <a name="targetFlow" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.targetFlow"></a>

```typescript
public readonly targetFlow: string;
```

- *Type:* string

---

##### `targetPage`<sup>Required</sup> <a name="targetPage" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.targetPage"></a>

```typescript
public readonly targetPage: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxFlowTransitionRoutes;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes">DialogflowCxFlowTransitionRoutes</a>

---


### DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.get"></a>

```typescript
public get(index: number): DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>[]

---


### DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putText` <a name="putText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putText"></a>

```typescript
public putText(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText</a>

---

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.textInput">textInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.text"></a>

```typescript
public readonly text: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.textInput"></a>

```typescript
public readonly textInput: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>

---


### DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption">allowPlaybackInterruption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.textInput">textInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.text">text</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowPlaybackInterruption`<sup>Required</sup> <a name="allowPlaybackInterruption" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.allowPlaybackInterruption"></a>

```typescript
public readonly allowPlaybackInterruption: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string[];
```

- *Type:* string[]

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.text"></a>

```typescript
public readonly text: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText</a>

---


### DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putMessages">putMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetMessages">resetMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetReturnPartialResponses">resetReturnPartialResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetTag">resetTag</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetWebhook">resetWebhook</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessages` <a name="putMessages" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putMessages"></a>

```typescript
public putMessages(value: IResolvable | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putMessages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>[]

---

##### `resetMessages` <a name="resetMessages" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetMessages"></a>

```typescript
public resetMessages(): void
```

##### `resetReturnPartialResponses` <a name="resetReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetReturnPartialResponses"></a>

```typescript
public resetReturnPartialResponses(): void
```

##### `resetTag` <a name="resetTag" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetTag"></a>

```typescript
public resetTag(): void
```

##### `resetWebhook` <a name="resetWebhook" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetWebhook"></a>

```typescript
public resetWebhook(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.messages">messages</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.messagesInput">messagesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponsesInput">returnPartialResponsesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.tagInput">tagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.webhookInput">webhookInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponses">returnPartialResponses</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.tag">tag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.webhook">webhook</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment">DialogflowCxFlowTransitionRoutesTriggerFulfillment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.messages"></a>

```typescript
public readonly messages: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList</a>

---

##### `messagesInput`<sup>Optional</sup> <a name="messagesInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.messagesInput"></a>

```typescript
public readonly messagesInput: IResolvable | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>[]

---

##### `returnPartialResponsesInput`<sup>Optional</sup> <a name="returnPartialResponsesInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponsesInput"></a>

```typescript
public readonly returnPartialResponsesInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tagInput`<sup>Optional</sup> <a name="tagInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.tagInput"></a>

```typescript
public readonly tagInput: string;
```

- *Type:* string

---

##### `webhookInput`<sup>Optional</sup> <a name="webhookInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.webhookInput"></a>

```typescript
public readonly webhookInput: string;
```

- *Type:* string

---

##### `returnPartialResponses`<sup>Required</sup> <a name="returnPartialResponses" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponses"></a>

```typescript
public readonly returnPartialResponses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `tag`<sup>Required</sup> <a name="tag" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

---

##### `webhook`<sup>Required</sup> <a name="webhook" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.webhook"></a>

```typescript
public readonly webhook: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxFlowTransitionRoutesTriggerFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment">DialogflowCxFlowTransitionRoutesTriggerFulfillment</a>

---



