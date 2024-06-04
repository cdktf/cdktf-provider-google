# `dialogflowCxFlow` Submodule <a name="`dialogflowCxFlow` Submodule" id="@cdktf/provider-google.dialogflowCxFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxFlow <a name="DialogflowCxFlow" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow google_dialogflow_cx_flow}.

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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.putAdvancedSettings">putAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.putEventHandlers">putEventHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.putNluSettings">putNluSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.putTransitionRoutes">putTransitionRoutes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetAdvancedSettings">resetAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetEventHandlers">resetEventHandlers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetIsDefaultStartFlow">resetIsDefaultStartFlow</a></code> | *No description.* |
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

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

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

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAdvancedSettings` <a name="putAdvancedSettings" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.putAdvancedSettings"></a>

```typescript
public putAdvancedSettings(value: DialogflowCxFlowAdvancedSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.putAdvancedSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettings">DialogflowCxFlowAdvancedSettings</a>

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

##### `resetAdvancedSettings` <a name="resetAdvancedSettings" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetAdvancedSettings"></a>

```typescript
public resetAdvancedSettings(): void
```

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

##### `resetIsDefaultStartFlow` <a name="resetIsDefaultStartFlow" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.resetIsDefaultStartFlow"></a>

```typescript
public resetIsDefaultStartFlow(): void
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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DialogflowCxFlow resource upon running "cdktf plan <stack-name>". |

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

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.generateConfigForImport"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

dialogflowCxFlow.DialogflowCxFlow.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DialogflowCxFlow resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowCxFlow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowCxFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowCxFlow to import is found.

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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.advancedSettings">advancedSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference">DialogflowCxFlowAdvancedSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.eventHandlers">eventHandlers</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList">DialogflowCxFlowEventHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.nluSettings">nluSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettingsOutputReference">DialogflowCxFlowNluSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeoutsOutputReference">DialogflowCxFlowTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.transitionRoutes">transitionRoutes</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList">DialogflowCxFlowTransitionRoutesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.advancedSettingsInput">advancedSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettings">DialogflowCxFlowAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.eventHandlersInput">eventHandlersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers">DialogflowCxFlowEventHandlers</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.isDefaultStartFlowInput">isDefaultStartFlowInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.nluSettingsInput">nluSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings">DialogflowCxFlowNluSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts">DialogflowCxFlowTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.transitionRouteGroupsInput">transitionRouteGroupsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.transitionRoutesInput">transitionRoutesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes">DialogflowCxFlowTransitionRoutes</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.isDefaultStartFlow">isDefaultStartFlow</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
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

##### `advancedSettings`<sup>Required</sup> <a name="advancedSettings" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.advancedSettings"></a>

```typescript
public readonly advancedSettings: DialogflowCxFlowAdvancedSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference">DialogflowCxFlowAdvancedSettingsOutputReference</a>

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

##### `advancedSettingsInput`<sup>Optional</sup> <a name="advancedSettingsInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.advancedSettingsInput"></a>

```typescript
public readonly advancedSettingsInput: DialogflowCxFlowAdvancedSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettings">DialogflowCxFlowAdvancedSettings</a>

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

##### `isDefaultStartFlowInput`<sup>Optional</sup> <a name="isDefaultStartFlowInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.isDefaultStartFlowInput"></a>

```typescript
public readonly isDefaultStartFlowInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

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

##### `isDefaultStartFlow`<sup>Required</sup> <a name="isDefaultStartFlow" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlow.property.isDefaultStartFlow"></a>

```typescript
public readonly isDefaultStartFlow: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

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

### DialogflowCxFlowAdvancedSettings <a name="DialogflowCxFlowAdvancedSettings" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettings.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowAdvancedSettings: dialogflowCxFlow.DialogflowCxFlowAdvancedSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettings.property.audioExportGcsDestination">audioExportGcsDestination</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination">DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination</a></code> | audio_export_gcs_destination block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettings.property.dtmfSettings">dtmfSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettings">DialogflowCxFlowAdvancedSettingsDtmfSettings</a></code> | dtmf_settings block. |

---

##### `audioExportGcsDestination`<sup>Optional</sup> <a name="audioExportGcsDestination" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettings.property.audioExportGcsDestination"></a>

```typescript
public readonly audioExportGcsDestination: DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination">DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination</a>

audio_export_gcs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#audio_export_gcs_destination DialogflowCxFlow#audio_export_gcs_destination}

---

##### `dtmfSettings`<sup>Optional</sup> <a name="dtmfSettings" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettings.property.dtmfSettings"></a>

```typescript
public readonly dtmfSettings: DialogflowCxFlowAdvancedSettingsDtmfSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettings">DialogflowCxFlowAdvancedSettingsDtmfSettings</a>

dtmf_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#dtmf_settings DialogflowCxFlow#dtmf_settings}

---

### DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination <a name="DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowAdvancedSettingsAudioExportGcsDestination: dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination.property.uri">uri</a></code> | <code>string</code> | The Google Cloud Storage URI for the exported objects. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The Google Cloud Storage URI for the exported objects.

Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation.
Format: gs://bucket/object-name-or-prefix

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#uri DialogflowCxFlow#uri}

---

### DialogflowCxFlowAdvancedSettingsDtmfSettings <a name="DialogflowCxFlowAdvancedSettingsDtmfSettings" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettings.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowAdvancedSettingsDtmfSettings: dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, incoming audio is processed for DTMF (dual tone multi frequency) events. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettings.property.finishDigit">finishDigit</a></code> | <code>string</code> | The digit that terminates a DTMF digit sequence. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettings.property.maxDigits">maxDigits</a></code> | <code>number</code> | Max length of DTMF digits. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, incoming audio is processed for DTMF (dual tone multi frequency) events.

For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#enabled DialogflowCxFlow#enabled}

---

##### `finishDigit`<sup>Optional</sup> <a name="finishDigit" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettings.property.finishDigit"></a>

```typescript
public readonly finishDigit: string;
```

- *Type:* string

The digit that terminates a DTMF digit sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#finish_digit DialogflowCxFlow#finish_digit}

---

##### `maxDigits`<sup>Optional</sup> <a name="maxDigits" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettings.property.maxDigits"></a>

```typescript
public readonly maxDigits: number;
```

- *Type:* number

Max length of DTMF digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#max_digits DialogflowCxFlow#max_digits}

---

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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.advancedSettings">advancedSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettings">DialogflowCxFlowAdvancedSettings</a></code> | advanced_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.description">description</a></code> | <code>string</code> | The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.eventHandlers">eventHandlers</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers">DialogflowCxFlowEventHandlers</a>[]</code> | event_handlers block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#id DialogflowCxFlow#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.isDefaultStartFlow">isDefaultStartFlow</a></code> | <code>boolean \| cdktf.IResolvable</code> | Marks this as the [Default Start Flow](https://cloud.google.com/dialogflow/cx/docs/concept/flow#start) for an agent. When you create an agent, the Default Start Flow is created automatically. The Default Start Flow cannot be deleted; deleting the 'google_dialogflow_cx_flow' resource does nothing to the underlying GCP resources. |
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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#display_name DialogflowCxFlow#display_name}

---

##### `advancedSettings`<sup>Optional</sup> <a name="advancedSettings" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.advancedSettings"></a>

```typescript
public readonly advancedSettings: DialogflowCxFlowAdvancedSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettings">DialogflowCxFlowAdvancedSettings</a>

advanced_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#advanced_settings DialogflowCxFlow#advanced_settings}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of the flow. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#description DialogflowCxFlow#description}

---

##### `eventHandlers`<sup>Optional</sup> <a name="eventHandlers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.eventHandlers"></a>

```typescript
public readonly eventHandlers: IResolvable | DialogflowCxFlowEventHandlers[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers">DialogflowCxFlowEventHandlers</a>[]

event_handlers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#event_handlers DialogflowCxFlow#event_handlers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#id DialogflowCxFlow#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isDefaultStartFlow`<sup>Optional</sup> <a name="isDefaultStartFlow" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.isDefaultStartFlow"></a>

```typescript
public readonly isDefaultStartFlow: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Marks this as the [Default Start Flow](https://cloud.google.com/dialogflow/cx/docs/concept/flow#start) for an agent. When you create an agent, the Default Start Flow is created automatically. The Default Start Flow cannot be deleted; deleting the 'google_dialogflow_cx_flow' resource does nothing to the underlying GCP resources.

~> Avoid having multiple 'google_dialogflow_cx_flow' resources linked to the same agent with 'is_default_start_flow = true' because they will compete to control a single Default Start Flow resource in GCP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#is_default_start_flow DialogflowCxFlow#is_default_start_flow}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

The language of the following fields in flow: Flow.event_handlers.trigger_fulfillment.messages Flow.event_handlers.trigger_fulfillment.conditional_cases Flow.transition_routes.trigger_fulfillment.messages Flow.transition_routes.trigger_fulfillment.conditional_cases If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#language_code DialogflowCxFlow#language_code}

---

##### `nluSettings`<sup>Optional</sup> <a name="nluSettings" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.nluSettings"></a>

```typescript
public readonly nluSettings: DialogflowCxFlowNluSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings">DialogflowCxFlowNluSettings</a>

nlu_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#nlu_settings DialogflowCxFlow#nlu_settings}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#parent DialogflowCxFlow#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxFlowTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts">DialogflowCxFlowTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#timeouts DialogflowCxFlow#timeouts}

---

##### `transitionRouteGroups`<sup>Optional</sup> <a name="transitionRouteGroups" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.transitionRouteGroups"></a>

```typescript
public readonly transitionRouteGroups: string[];
```

- *Type:* string[]

A flow's transition route group serve two purposes: They are responsible for matching the user's first utterances in the flow.

They are inherited by every page's [transition route groups][Page.transition_route_groups]. Transition route groups defined in the page have higher priority than those defined in the flow.
Format:projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/transitionRouteGroups/<TransitionRouteGroup ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#transition_route_groups DialogflowCxFlow#transition_route_groups}

---

##### `transitionRoutes`<sup>Optional</sup> <a name="transitionRoutes" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowConfig.property.transitionRoutes"></a>

```typescript
public readonly transitionRoutes: IResolvable | DialogflowCxFlowTransitionRoutes[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes">DialogflowCxFlowTransitionRoutes</a>[]

transition_routes block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#transition_routes DialogflowCxFlow#transition_routes}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#event DialogflowCxFlow#event}

---

##### `targetFlow`<sup>Optional</sup> <a name="targetFlow" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers.property.targetFlow"></a>

```typescript
public readonly targetFlow: string;
```

- *Type:* string

The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#target_flow DialogflowCxFlow#target_flow}

---

##### `targetPage`<sup>Optional</sup> <a name="targetPage" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers.property.targetPage"></a>

```typescript
public readonly targetPage: string;
```

- *Type:* string

The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#target_page DialogflowCxFlow#target_page}

---

##### `triggerFulfillment`<sup>Optional</sup> <a name="triggerFulfillment" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlers.property.triggerFulfillment"></a>

```typescript
public readonly triggerFulfillment: DialogflowCxFlowEventHandlersTriggerFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment">DialogflowCxFlowEventHandlersTriggerFulfillment</a>

trigger_fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#trigger_fulfillment DialogflowCxFlow#trigger_fulfillment}

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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.conditionalCases">conditionalCases</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases">DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases</a>[]</code> | conditional_cases block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.messages">messages</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages">DialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>[]</code> | messages block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.returnPartialResponses">returnPartialResponses</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.setParameterActions">setParameterActions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions">DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions</a>[]</code> | set_parameter_actions block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.tag">tag</a></code> | <code>string</code> | The tag used by the webhook to identify which fulfillment is being called. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.webhook">webhook</a></code> | <code>string</code> | The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>. |

---

##### `conditionalCases`<sup>Optional</sup> <a name="conditionalCases" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.conditionalCases"></a>

```typescript
public readonly conditionalCases: IResolvable | DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases">DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases</a>[]

conditional_cases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#conditional_cases DialogflowCxFlow#conditional_cases}

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.messages"></a>

```typescript
public readonly messages: IResolvable | DialogflowCxFlowEventHandlersTriggerFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages">DialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>[]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#messages DialogflowCxFlow#messages}

---

##### `returnPartialResponses`<sup>Optional</sup> <a name="returnPartialResponses" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.returnPartialResponses"></a>

```typescript
public readonly returnPartialResponses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#return_partial_responses DialogflowCxFlow#return_partial_responses}

---

##### `setParameterActions`<sup>Optional</sup> <a name="setParameterActions" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.setParameterActions"></a>

```typescript
public readonly setParameterActions: IResolvable | DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions">DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions</a>[]

set_parameter_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#set_parameter_actions DialogflowCxFlow#set_parameter_actions}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#tag DialogflowCxFlow#tag}

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillment.property.webhook"></a>

```typescript
public readonly webhook: string;
```

- *Type:* string

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#webhook DialogflowCxFlow#webhook}

---

### DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases: dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases.property.cases">cases</a></code> | <code>string</code> | A JSON encoded list of cascading if-else conditions. |

---

##### `cases`<sup>Optional</sup> <a name="cases" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases.property.cases"></a>

```typescript
public readonly cases: string;
```

- *Type:* string

A JSON encoded list of cascading if-else conditions.

Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#cases DialogflowCxFlow#cases}

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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.channel">channel</a></code> | <code>string</code> | The channel which the response is associated with. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.conversationSuccess">conversationSuccess</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess</a></code> | conversation_success block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.liveAgentHandoff">liveAgentHandoff</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff</a></code> | live_agent_handoff block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.outputAudioText">outputAudioText</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText</a></code> | output_audio_text block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.payload">payload</a></code> | <code>string</code> | A custom, platform-specific payload. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.playAudio">playAudio</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio</a></code> | play_audio block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.telephonyTransferCall">telephonyTransferCall</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall</a></code> | telephony_transfer_call block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText</a></code> | text block. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

The channel which the response is associated with.

Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#channel DialogflowCxFlow#channel}

---

##### `conversationSuccess`<sup>Optional</sup> <a name="conversationSuccess" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.conversationSuccess"></a>

```typescript
public readonly conversationSuccess: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess</a>

conversation_success block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#conversation_success DialogflowCxFlow#conversation_success}

---

##### `liveAgentHandoff`<sup>Optional</sup> <a name="liveAgentHandoff" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.liveAgentHandoff"></a>

```typescript
public readonly liveAgentHandoff: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff</a>

live_agent_handoff block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#live_agent_handoff DialogflowCxFlow#live_agent_handoff}

---

##### `outputAudioText`<sup>Optional</sup> <a name="outputAudioText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.outputAudioText"></a>

```typescript
public readonly outputAudioText: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText</a>

output_audio_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#output_audio_text DialogflowCxFlow#output_audio_text}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

A custom, platform-specific payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#payload DialogflowCxFlow#payload}

---

##### `playAudio`<sup>Optional</sup> <a name="playAudio" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.playAudio"></a>

```typescript
public readonly playAudio: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio</a>

play_audio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#play_audio DialogflowCxFlow#play_audio}

---

##### `telephonyTransferCall`<sup>Optional</sup> <a name="telephonyTransferCall" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.telephonyTransferCall"></a>

```typescript
public readonly telephonyTransferCall: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall</a>

telephony_transfer_call block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#telephony_transfer_call DialogflowCxFlow#telephony_transfer_call}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages.property.text"></a>

```typescript
public readonly text: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#text DialogflowCxFlow#text}

---

### DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess: dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess.property.metadata">metadata</a></code> | <code>string</code> | Custom metadata. Dialogflow doesn't impose any structure on this. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

Custom metadata. Dialogflow doesn't impose any structure on this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#metadata DialogflowCxFlow#metadata}

---

### DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff: dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff.property.metadata">metadata</a></code> | <code>string</code> | Custom metadata. Dialogflow doesn't impose any structure on this. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

Custom metadata. Dialogflow doesn't impose any structure on this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#metadata DialogflowCxFlow#metadata}

---

### DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText: dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText.property.ssml">ssml</a></code> | <code>string</code> | The SSML text to be synthesized. For more information, see SSML. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText.property.text">text</a></code> | <code>string</code> | The raw text to be synthesized. |

---

##### `ssml`<sup>Optional</sup> <a name="ssml" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText.property.ssml"></a>

```typescript
public readonly ssml: string;
```

- *Type:* string

The SSML text to be synthesized. For more information, see SSML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#ssml DialogflowCxFlow#ssml}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

The raw text to be synthesized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#text DialogflowCxFlow#text}

---

### DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio: dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio.property.audioUri">audioUri</a></code> | <code>string</code> | URI of the audio clip. |

---

##### `audioUri`<sup>Required</sup> <a name="audioUri" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio.property.audioUri"></a>

```typescript
public readonly audioUri: string;
```

- *Type:* string

URI of the audio clip.

Dialogflow does not impose any validation on this value. It is specific to the client that reads it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#audio_uri DialogflowCxFlow#audio_uri}

---

### DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall: dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Transfer the call to a phone number in E.164 format. |

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Transfer the call to a phone number in E.164 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#phone_number DialogflowCxFlow#phone_number}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#text DialogflowCxFlow#text}

---

### DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions: dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions.property.parameter">parameter</a></code> | <code>string</code> | Display name of the parameter. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions.property.value">value</a></code> | <code>string</code> | The new JSON-encoded value of the parameter. A null value clears the parameter. |

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions.property.parameter"></a>

```typescript
public readonly parameter: string;
```

- *Type:* string

Display name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#parameter DialogflowCxFlow#parameter}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The new JSON-encoded value of the parameter. A null value clears the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#value DialogflowCxFlow#value}

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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings.property.modelType">modelType</a></code> | <code>string</code> | Indicates the type of NLU model. |

---

##### `classificationThreshold`<sup>Optional</sup> <a name="classificationThreshold" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings.property.classificationThreshold"></a>

```typescript
public readonly classificationThreshold: number;
```

- *Type:* number

To filter out false positive results and still get variety in matched natural language inputs for your agent, you can tune the machine learning classification threshold.

If the returned score value is less than the threshold value, then a no-match event will be triggered. The score values range from 0.0 (completely uncertain) to 1.0 (completely certain). If set to 0.0, the default of 0.3 is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#classification_threshold DialogflowCxFlow#classification_threshold}

---

##### `modelTrainingMode`<sup>Optional</sup> <a name="modelTrainingMode" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings.property.modelTrainingMode"></a>

```typescript
public readonly modelTrainingMode: string;
```

- *Type:* string

Indicates NLU model training mode.

* MODEL_TRAINING_MODE_AUTOMATIC: NLU model training is automatically triggered when a flow gets modified. User can also manually trigger model training in this mode.
* MODEL_TRAINING_MODE_MANUAL: User needs to manually trigger NLU model training. Best for large flows whose models take long time to train. Possible values: ["MODEL_TRAINING_MODE_AUTOMATIC", "MODEL_TRAINING_MODE_MANUAL"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#model_training_mode DialogflowCxFlow#model_training_mode}

---

##### `modelType`<sup>Optional</sup> <a name="modelType" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowNluSettings.property.modelType"></a>

```typescript
public readonly modelType: string;
```

- *Type:* string

Indicates the type of NLU model.

* MODEL_TYPE_STANDARD: Use standard NLU model.
* MODEL_TYPE_ADVANCED: Use advanced NLU model. Possible values: ["MODEL_TYPE_STANDARD", "MODEL_TYPE_ADVANCED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#model_type DialogflowCxFlow#model_type}

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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#create DialogflowCxFlow#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#delete DialogflowCxFlow#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#update DialogflowCxFlow#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#create DialogflowCxFlow#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#delete DialogflowCxFlow#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#update DialogflowCxFlow#update}.

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#condition DialogflowCxFlow#condition}

---

##### `intent`<sup>Optional</sup> <a name="intent" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes.property.intent"></a>

```typescript
public readonly intent: string;
```

- *Type:* string

The unique identifier of an Intent.

Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/intents/<Intent ID>. Indicates that the transition can only happen when the given intent is matched. At least one of intent or condition must be specified. When both intent and condition are specified, the transition can only happen when both are fulfilled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#intent DialogflowCxFlow#intent}

---

##### `targetFlow`<sup>Optional</sup> <a name="targetFlow" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes.property.targetFlow"></a>

```typescript
public readonly targetFlow: string;
```

- *Type:* string

The target flow to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#target_flow DialogflowCxFlow#target_flow}

---

##### `targetPage`<sup>Optional</sup> <a name="targetPage" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes.property.targetPage"></a>

```typescript
public readonly targetPage: string;
```

- *Type:* string

The target page to transition to. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/flows/<Flow ID>/pages/<Page ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#target_page DialogflowCxFlow#target_page}

---

##### `triggerFulfillment`<sup>Optional</sup> <a name="triggerFulfillment" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutes.property.triggerFulfillment"></a>

```typescript
public readonly triggerFulfillment: DialogflowCxFlowTransitionRoutesTriggerFulfillment;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment">DialogflowCxFlowTransitionRoutesTriggerFulfillment</a>

trigger_fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#trigger_fulfillment DialogflowCxFlow#trigger_fulfillment}

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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.conditionalCases">conditionalCases</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases">DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases</a>[]</code> | conditional_cases block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.messages">messages</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>[]</code> | messages block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.returnPartialResponses">returnPartialResponses</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.setParameterActions">setParameterActions</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions">DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions</a>[]</code> | set_parameter_actions block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.tag">tag</a></code> | <code>string</code> | The tag used by the webhook to identify which fulfillment is being called. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.webhook">webhook</a></code> | <code>string</code> | The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>. |

---

##### `conditionalCases`<sup>Optional</sup> <a name="conditionalCases" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.conditionalCases"></a>

```typescript
public readonly conditionalCases: IResolvable | DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases">DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases</a>[]

conditional_cases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#conditional_cases DialogflowCxFlow#conditional_cases}

---

##### `messages`<sup>Optional</sup> <a name="messages" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.messages"></a>

```typescript
public readonly messages: IResolvable | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>[]

messages block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#messages DialogflowCxFlow#messages}

---

##### `returnPartialResponses`<sup>Optional</sup> <a name="returnPartialResponses" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.returnPartialResponses"></a>

```typescript
public readonly returnPartialResponses: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether Dialogflow should return currently queued fulfillment response messages in streaming APIs.

If a webhook is specified, it happens before Dialogflow invokes webhook. Warning: 1) This flag only affects streaming API. Responses are still queued and returned once in non-streaming API. 2) The flag can be enabled in any fulfillment but only the first 3 partial responses will be returned. You may only want to apply it to fulfillments that have slow webhooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#return_partial_responses DialogflowCxFlow#return_partial_responses}

---

##### `setParameterActions`<sup>Optional</sup> <a name="setParameterActions" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.setParameterActions"></a>

```typescript
public readonly setParameterActions: IResolvable | DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions">DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions</a>[]

set_parameter_actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#set_parameter_actions DialogflowCxFlow#set_parameter_actions}

---

##### `tag`<sup>Optional</sup> <a name="tag" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.tag"></a>

```typescript
public readonly tag: string;
```

- *Type:* string

The tag used by the webhook to identify which fulfillment is being called.

This field is required if webhook is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#tag DialogflowCxFlow#tag}

---

##### `webhook`<sup>Optional</sup> <a name="webhook" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillment.property.webhook"></a>

```typescript
public readonly webhook: string;
```

- *Type:* string

The webhook to call. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/webhooks/<Webhook ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#webhook DialogflowCxFlow#webhook}

---

### DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases: dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases.property.cases">cases</a></code> | <code>string</code> | A JSON encoded list of cascading if-else conditions. |

---

##### `cases`<sup>Optional</sup> <a name="cases" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases.property.cases"></a>

```typescript
public readonly cases: string;
```

- *Type:* string

A JSON encoded list of cascading if-else conditions.

Cases are mutually exclusive. The first one with a matching condition is selected, all the rest ignored.
See [Case](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/Fulfillment#case) for the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#cases DialogflowCxFlow#cases}

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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.channel">channel</a></code> | <code>string</code> | The channel which the response is associated with. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.conversationSuccess">conversationSuccess</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess</a></code> | conversation_success block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.liveAgentHandoff">liveAgentHandoff</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff</a></code> | live_agent_handoff block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.outputAudioText">outputAudioText</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText</a></code> | output_audio_text block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.payload">payload</a></code> | <code>string</code> | A custom, platform-specific payload. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.playAudio">playAudio</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio</a></code> | play_audio block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.telephonyTransferCall">telephonyTransferCall</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall</a></code> | telephony_transfer_call block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText</a></code> | text block. |

---

##### `channel`<sup>Optional</sup> <a name="channel" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

The channel which the response is associated with.

Clients can specify the channel via QueryParameters.channel, and only associated channel response will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#channel DialogflowCxFlow#channel}

---

##### `conversationSuccess`<sup>Optional</sup> <a name="conversationSuccess" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.conversationSuccess"></a>

```typescript
public readonly conversationSuccess: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess</a>

conversation_success block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#conversation_success DialogflowCxFlow#conversation_success}

---

##### `liveAgentHandoff`<sup>Optional</sup> <a name="liveAgentHandoff" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.liveAgentHandoff"></a>

```typescript
public readonly liveAgentHandoff: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff</a>

live_agent_handoff block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#live_agent_handoff DialogflowCxFlow#live_agent_handoff}

---

##### `outputAudioText`<sup>Optional</sup> <a name="outputAudioText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.outputAudioText"></a>

```typescript
public readonly outputAudioText: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText</a>

output_audio_text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#output_audio_text DialogflowCxFlow#output_audio_text}

---

##### `payload`<sup>Optional</sup> <a name="payload" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

A custom, platform-specific payload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#payload DialogflowCxFlow#payload}

---

##### `playAudio`<sup>Optional</sup> <a name="playAudio" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.playAudio"></a>

```typescript
public readonly playAudio: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio</a>

play_audio block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#play_audio DialogflowCxFlow#play_audio}

---

##### `telephonyTransferCall`<sup>Optional</sup> <a name="telephonyTransferCall" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.telephonyTransferCall"></a>

```typescript
public readonly telephonyTransferCall: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall</a>

telephony_transfer_call block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#telephony_transfer_call DialogflowCxFlow#telephony_transfer_call}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages.property.text"></a>

```typescript
public readonly text: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText</a>

text block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#text DialogflowCxFlow#text}

---

### DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess: dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess.property.metadata">metadata</a></code> | <code>string</code> | Custom metadata. Dialogflow doesn't impose any structure on this. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

Custom metadata. Dialogflow doesn't impose any structure on this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#metadata DialogflowCxFlow#metadata}

---

### DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff: dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff.property.metadata">metadata</a></code> | <code>string</code> | Custom metadata. Dialogflow doesn't impose any structure on this. |

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

Custom metadata. Dialogflow doesn't impose any structure on this.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#metadata DialogflowCxFlow#metadata}

---

### DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText: dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText.property.ssml">ssml</a></code> | <code>string</code> | The SSML text to be synthesized. For more information, see SSML. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText.property.text">text</a></code> | <code>string</code> | The raw text to be synthesized. |

---

##### `ssml`<sup>Optional</sup> <a name="ssml" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText.property.ssml"></a>

```typescript
public readonly ssml: string;
```

- *Type:* string

The SSML text to be synthesized. For more information, see SSML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#ssml DialogflowCxFlow#ssml}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

The raw text to be synthesized.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#text DialogflowCxFlow#text}

---

### DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio: dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio.property.audioUri">audioUri</a></code> | <code>string</code> | URI of the audio clip. |

---

##### `audioUri`<sup>Required</sup> <a name="audioUri" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio.property.audioUri"></a>

```typescript
public readonly audioUri: string;
```

- *Type:* string

URI of the audio clip.

Dialogflow does not impose any validation on this value. It is specific to the client that reads it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#audio_uri DialogflowCxFlow#audio_uri}

---

### DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall: dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | Transfer the call to a phone number in E.164 format. |

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

Transfer the call to a phone number in E.164 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#phone_number DialogflowCxFlow#phone_number}

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#text DialogflowCxFlow#text}

---

### DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

const dialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions: dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions.property.parameter">parameter</a></code> | <code>string</code> | Display name of the parameter. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions.property.value">value</a></code> | <code>string</code> | The new JSON-encoded value of the parameter. A null value clears the parameter. |

---

##### `parameter`<sup>Optional</sup> <a name="parameter" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions.property.parameter"></a>

```typescript
public readonly parameter: string;
```

- *Type:* string

Display name of the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#parameter DialogflowCxFlow#parameter}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

The new JSON-encoded value of the parameter. A null value clears the parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.32.0/docs/resources/dialogflow_cx_flow#value DialogflowCxFlow#value}

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference <a name="DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUri` <a name="resetUri" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination">DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination">DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination</a>

---


### DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference <a name="DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.resetFinishDigit">resetFinishDigit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.resetMaxDigits">resetMaxDigits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFinishDigit` <a name="resetFinishDigit" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.resetFinishDigit"></a>

```typescript
public resetFinishDigit(): void
```

##### `resetMaxDigits` <a name="resetMaxDigits" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.resetMaxDigits"></a>

```typescript
public resetMaxDigits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.finishDigitInput">finishDigitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.maxDigitsInput">maxDigitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.finishDigit">finishDigit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.maxDigits">maxDigits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettings">DialogflowCxFlowAdvancedSettingsDtmfSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `finishDigitInput`<sup>Optional</sup> <a name="finishDigitInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.finishDigitInput"></a>

```typescript
public readonly finishDigitInput: string;
```

- *Type:* string

---

##### `maxDigitsInput`<sup>Optional</sup> <a name="maxDigitsInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.maxDigitsInput"></a>

```typescript
public readonly maxDigitsInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `finishDigit`<sup>Required</sup> <a name="finishDigit" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.finishDigit"></a>

```typescript
public readonly finishDigit: string;
```

- *Type:* string

---

##### `maxDigits`<sup>Required</sup> <a name="maxDigits" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.maxDigits"></a>

```typescript
public readonly maxDigits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxFlowAdvancedSettingsDtmfSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettings">DialogflowCxFlowAdvancedSettingsDtmfSettings</a>

---


### DialogflowCxFlowAdvancedSettingsOutputReference <a name="DialogflowCxFlowAdvancedSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.putAudioExportGcsDestination">putAudioExportGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.putDtmfSettings">putDtmfSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.resetAudioExportGcsDestination">resetAudioExportGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.resetDtmfSettings">resetDtmfSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAudioExportGcsDestination` <a name="putAudioExportGcsDestination" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.putAudioExportGcsDestination"></a>

```typescript
public putAudioExportGcsDestination(value: DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.putAudioExportGcsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination">DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination</a>

---

##### `putDtmfSettings` <a name="putDtmfSettings" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.putDtmfSettings"></a>

```typescript
public putDtmfSettings(value: DialogflowCxFlowAdvancedSettingsDtmfSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.putDtmfSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettings">DialogflowCxFlowAdvancedSettingsDtmfSettings</a>

---

##### `resetAudioExportGcsDestination` <a name="resetAudioExportGcsDestination" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.resetAudioExportGcsDestination"></a>

```typescript
public resetAudioExportGcsDestination(): void
```

##### `resetDtmfSettings` <a name="resetDtmfSettings" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.resetDtmfSettings"></a>

```typescript
public resetDtmfSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.property.audioExportGcsDestination">audioExportGcsDestination</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference">DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.property.dtmfSettings">dtmfSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference">DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.property.audioExportGcsDestinationInput">audioExportGcsDestinationInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination">DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.property.dtmfSettingsInput">dtmfSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettings">DialogflowCxFlowAdvancedSettingsDtmfSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettings">DialogflowCxFlowAdvancedSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioExportGcsDestination`<sup>Required</sup> <a name="audioExportGcsDestination" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.property.audioExportGcsDestination"></a>

```typescript
public readonly audioExportGcsDestination: DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference">DialogflowCxFlowAdvancedSettingsAudioExportGcsDestinationOutputReference</a>

---

##### `dtmfSettings`<sup>Required</sup> <a name="dtmfSettings" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.property.dtmfSettings"></a>

```typescript
public readonly dtmfSettings: DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference">DialogflowCxFlowAdvancedSettingsDtmfSettingsOutputReference</a>

---

##### `audioExportGcsDestinationInput`<sup>Optional</sup> <a name="audioExportGcsDestinationInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.property.audioExportGcsDestinationInput"></a>

```typescript
public readonly audioExportGcsDestinationInput: DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination">DialogflowCxFlowAdvancedSettingsAudioExportGcsDestination</a>

---

##### `dtmfSettingsInput`<sup>Optional</sup> <a name="dtmfSettingsInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.property.dtmfSettingsInput"></a>

```typescript
public readonly dtmfSettingsInput: DialogflowCxFlowAdvancedSettingsDtmfSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsDtmfSettings">DialogflowCxFlowAdvancedSettingsDtmfSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxFlowAdvancedSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowAdvancedSettings">DialogflowCxFlowAdvancedSettings</a>

---


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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

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


### DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.get"></a>

```typescript
public get(index: number): DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases">DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases">DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases</a>[]

---


### DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.resetCases">resetCases</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCases` <a name="resetCases" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.resetCases"></a>

```typescript
public resetCases(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.casesInput">casesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.cases">cases</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases">DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `casesInput`<sup>Optional</sup> <a name="casesInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.casesInput"></a>

```typescript
public readonly casesInput: string;
```

- *Type:* string

---

##### `cases`<sup>Required</sup> <a name="cases" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.cases"></a>

```typescript
public readonly cases: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases">DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases</a>

---


### DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess</a>

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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

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


### DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff</a>

---


### DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.resetSsml">resetSsml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSsml` <a name="resetSsml" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.resetSsml"></a>

```typescript
public resetSsml(): void
```

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.allowPlaybackInterruption">allowPlaybackInterruption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.ssmlInput">ssmlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.ssml">ssml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowPlaybackInterruption`<sup>Required</sup> <a name="allowPlaybackInterruption" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.allowPlaybackInterruption"></a>

```typescript
public readonly allowPlaybackInterruption: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ssmlInput`<sup>Optional</sup> <a name="ssmlInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.ssmlInput"></a>

```typescript
public readonly ssmlInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `ssml`<sup>Required</sup> <a name="ssml" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.ssml"></a>

```typescript
public readonly ssml: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText</a>

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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putConversationSuccess">putConversationSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putLiveAgentHandoff">putLiveAgentHandoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putOutputAudioText">putOutputAudioText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putPlayAudio">putPlayAudio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putTelephonyTransferCall">putTelephonyTransferCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetConversationSuccess">resetConversationSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetLiveAgentHandoff">resetLiveAgentHandoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetOutputAudioText">resetOutputAudioText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetPlayAudio">resetPlayAudio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetTelephonyTransferCall">resetTelephonyTransferCall</a></code> | *No description.* |
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

##### `putConversationSuccess` <a name="putConversationSuccess" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putConversationSuccess"></a>

```typescript
public putConversationSuccess(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putConversationSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess</a>

---

##### `putLiveAgentHandoff` <a name="putLiveAgentHandoff" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putLiveAgentHandoff"></a>

```typescript
public putLiveAgentHandoff(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putLiveAgentHandoff.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff</a>

---

##### `putOutputAudioText` <a name="putOutputAudioText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putOutputAudioText"></a>

```typescript
public putOutputAudioText(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putOutputAudioText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText</a>

---

##### `putPlayAudio` <a name="putPlayAudio" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putPlayAudio"></a>

```typescript
public putPlayAudio(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putPlayAudio.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio</a>

---

##### `putTelephonyTransferCall` <a name="putTelephonyTransferCall" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putTelephonyTransferCall"></a>

```typescript
public putTelephonyTransferCall(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putTelephonyTransferCall.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall</a>

---

##### `putText` <a name="putText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putText"></a>

```typescript
public putText(value: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText</a>

---

##### `resetChannel` <a name="resetChannel" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetChannel"></a>

```typescript
public resetChannel(): void
```

##### `resetConversationSuccess` <a name="resetConversationSuccess" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetConversationSuccess"></a>

```typescript
public resetConversationSuccess(): void
```

##### `resetLiveAgentHandoff` <a name="resetLiveAgentHandoff" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetLiveAgentHandoff"></a>

```typescript
public resetLiveAgentHandoff(): void
```

##### `resetOutputAudioText` <a name="resetOutputAudioText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetOutputAudioText"></a>

```typescript
public resetOutputAudioText(): void
```

##### `resetPayload` <a name="resetPayload" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetPayload"></a>

```typescript
public resetPayload(): void
```

##### `resetPlayAudio` <a name="resetPlayAudio" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetPlayAudio"></a>

```typescript
public resetPlayAudio(): void
```

##### `resetTelephonyTransferCall` <a name="resetTelephonyTransferCall" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetTelephonyTransferCall"></a>

```typescript
public resetTelephonyTransferCall(): void
```

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.conversationSuccess">conversationSuccess</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.liveAgentHandoff">liveAgentHandoff</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.outputAudioText">outputAudioText</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.playAudio">playAudio</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.telephonyTransferCall">telephonyTransferCall</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.conversationSuccessInput">conversationSuccessInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.liveAgentHandoffInput">liveAgentHandoffInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.outputAudioTextInput">outputAudioTextInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.payloadInput">payloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.playAudioInput">playAudioInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.telephonyTransferCallInput">telephonyTransferCallInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.textInput">textInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.payload">payload</a></code> | <code>string</code> | *No description.* |
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

##### `conversationSuccess`<sup>Required</sup> <a name="conversationSuccess" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.conversationSuccess"></a>

```typescript
public readonly conversationSuccess: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccessOutputReference</a>

---

##### `liveAgentHandoff`<sup>Required</sup> <a name="liveAgentHandoff" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.liveAgentHandoff"></a>

```typescript
public readonly liveAgentHandoff: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoffOutputReference</a>

---

##### `outputAudioText`<sup>Required</sup> <a name="outputAudioText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.outputAudioText"></a>

```typescript
public readonly outputAudioText: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioTextOutputReference</a>

---

##### `playAudio`<sup>Required</sup> <a name="playAudio" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.playAudio"></a>

```typescript
public readonly playAudio: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference</a>

---

##### `telephonyTransferCall`<sup>Required</sup> <a name="telephonyTransferCall" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.telephonyTransferCall"></a>

```typescript
public readonly telephonyTransferCall: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.text"></a>

```typescript
public readonly text: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTextOutputReference</a>

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `conversationSuccessInput`<sup>Optional</sup> <a name="conversationSuccessInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.conversationSuccessInput"></a>

```typescript
public readonly conversationSuccessInput: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesConversationSuccess</a>

---

##### `liveAgentHandoffInput`<sup>Optional</sup> <a name="liveAgentHandoffInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.liveAgentHandoffInput"></a>

```typescript
public readonly liveAgentHandoffInput: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesLiveAgentHandoff</a>

---

##### `outputAudioTextInput`<sup>Optional</sup> <a name="outputAudioTextInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.outputAudioTextInput"></a>

```typescript
public readonly outputAudioTextInput: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputAudioText</a>

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: string;
```

- *Type:* string

---

##### `playAudioInput`<sup>Optional</sup> <a name="playAudioInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.playAudioInput"></a>

```typescript
public readonly playAudioInput: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio</a>

---

##### `telephonyTransferCallInput`<sup>Optional</sup> <a name="telephonyTransferCallInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.telephonyTransferCallInput"></a>

```typescript
public readonly telephonyTransferCallInput: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.textInput"></a>

```typescript
public readonly textInput: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesText</a>

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxFlowEventHandlersTriggerFulfillmentMessages;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages">DialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>

---


### DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.allowPlaybackInterruption">allowPlaybackInterruption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.audioUriInput">audioUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.audioUri">audioUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowPlaybackInterruption`<sup>Required</sup> <a name="allowPlaybackInterruption" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.allowPlaybackInterruption"></a>

```typescript
public readonly allowPlaybackInterruption: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `audioUriInput`<sup>Optional</sup> <a name="audioUriInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.audioUriInput"></a>

```typescript
public readonly audioUriInput: string;
```

- *Type:* string

---

##### `audioUri`<sup>Required</sup> <a name="audioUri" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.audioUri"></a>

```typescript
public readonly audioUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudioOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesPlayAudio</a>

---


### DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesTelephonyTransferCall</a>

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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putConditionalCases">putConditionalCases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putMessages">putMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putSetParameterActions">putSetParameterActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetConditionalCases">resetConditionalCases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetMessages">resetMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetReturnPartialResponses">resetReturnPartialResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetSetParameterActions">resetSetParameterActions</a></code> | *No description.* |
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

##### `putConditionalCases` <a name="putConditionalCases" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putConditionalCases"></a>

```typescript
public putConditionalCases(value: IResolvable | DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putConditionalCases.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases">DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases</a>[]

---

##### `putMessages` <a name="putMessages" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putMessages"></a>

```typescript
public putMessages(value: IResolvable | DialogflowCxFlowEventHandlersTriggerFulfillmentMessages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putMessages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages">DialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>[]

---

##### `putSetParameterActions` <a name="putSetParameterActions" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putSetParameterActions"></a>

```typescript
public putSetParameterActions(value: IResolvable | DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.putSetParameterActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions">DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions</a>[]

---

##### `resetConditionalCases` <a name="resetConditionalCases" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetConditionalCases"></a>

```typescript
public resetConditionalCases(): void
```

##### `resetMessages` <a name="resetMessages" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetMessages"></a>

```typescript
public resetMessages(): void
```

##### `resetReturnPartialResponses` <a name="resetReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetReturnPartialResponses"></a>

```typescript
public resetReturnPartialResponses(): void
```

##### `resetSetParameterActions` <a name="resetSetParameterActions" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.resetSetParameterActions"></a>

```typescript
public resetSetParameterActions(): void
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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.conditionalCases">conditionalCases</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList">DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.messages">messages</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.setParameterActions">setParameterActions</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList">DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.conditionalCasesInput">conditionalCasesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases">DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.messagesInput">messagesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessages">DialogflowCxFlowEventHandlersTriggerFulfillmentMessages</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.returnPartialResponsesInput">returnPartialResponsesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.setParameterActionsInput">setParameterActionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions">DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions</a>[]</code> | *No description.* |
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

##### `conditionalCases`<sup>Required</sup> <a name="conditionalCases" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.conditionalCases"></a>

```typescript
public readonly conditionalCases: DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList">DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCasesList</a>

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.messages"></a>

```typescript
public readonly messages: DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList">DialogflowCxFlowEventHandlersTriggerFulfillmentMessagesList</a>

---

##### `setParameterActions`<sup>Required</sup> <a name="setParameterActions" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.setParameterActions"></a>

```typescript
public readonly setParameterActions: DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList">DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList</a>

---

##### `conditionalCasesInput`<sup>Optional</sup> <a name="conditionalCasesInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.conditionalCasesInput"></a>

```typescript
public readonly conditionalCasesInput: IResolvable | DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases">DialogflowCxFlowEventHandlersTriggerFulfillmentConditionalCases</a>[]

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

##### `setParameterActionsInput`<sup>Optional</sup> <a name="setParameterActionsInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentOutputReference.property.setParameterActionsInput"></a>

```typescript
public readonly setParameterActionsInput: IResolvable | DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions">DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions</a>[]

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


### DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.get"></a>

```typescript
public get(index: number): DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions">DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions">DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions</a>[]

---


### DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference <a name="DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.resetParameter"></a>

```typescript
public resetParameter(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.parameterInput">parameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.parameter">parameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions">DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.parameterInput"></a>

```typescript
public readonly parameterInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.parameter"></a>

```typescript
public readonly parameter: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions">DialogflowCxFlowEventHandlersTriggerFulfillmentSetParameterActions</a>

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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

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


### DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.get"></a>

```typescript
public get(index: number): DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases">DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases">DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases</a>[]

---


### DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.resetCases">resetCases</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCases` <a name="resetCases" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.resetCases"></a>

```typescript
public resetCases(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.casesInput">casesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.cases">cases</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases">DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `casesInput`<sup>Optional</sup> <a name="casesInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.casesInput"></a>

```typescript
public readonly casesInput: string;
```

- *Type:* string

---

##### `cases`<sup>Required</sup> <a name="cases" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.cases"></a>

```typescript
public readonly cases: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases">DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases</a>

---


### DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess</a>

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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

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


### DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetadata` <a name="resetMetadata" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.resetMetadata"></a>

```typescript
public resetMetadata(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.metadataInput">metadataInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.metadata">metadata</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.metadataInput"></a>

```typescript
public readonly metadataInput: string;
```

- *Type:* string

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.metadata"></a>

```typescript
public readonly metadata: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff</a>

---


### DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.resetSsml">resetSsml</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSsml` <a name="resetSsml" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.resetSsml"></a>

```typescript
public resetSsml(): void
```

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.allowPlaybackInterruption">allowPlaybackInterruption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.ssmlInput">ssmlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.ssml">ssml</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowPlaybackInterruption`<sup>Required</sup> <a name="allowPlaybackInterruption" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.allowPlaybackInterruption"></a>

```typescript
public readonly allowPlaybackInterruption: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `ssmlInput`<sup>Optional</sup> <a name="ssmlInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.ssmlInput"></a>

```typescript
public readonly ssmlInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `ssml`<sup>Required</sup> <a name="ssml" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.ssml"></a>

```typescript
public readonly ssml: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText</a>

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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putConversationSuccess">putConversationSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putLiveAgentHandoff">putLiveAgentHandoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putOutputAudioText">putOutputAudioText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putPlayAudio">putPlayAudio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putTelephonyTransferCall">putTelephonyTransferCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putText">putText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetChannel">resetChannel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetConversationSuccess">resetConversationSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetLiveAgentHandoff">resetLiveAgentHandoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetOutputAudioText">resetOutputAudioText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetPayload">resetPayload</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetPlayAudio">resetPlayAudio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetTelephonyTransferCall">resetTelephonyTransferCall</a></code> | *No description.* |
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

##### `putConversationSuccess` <a name="putConversationSuccess" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putConversationSuccess"></a>

```typescript
public putConversationSuccess(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putConversationSuccess.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess</a>

---

##### `putLiveAgentHandoff` <a name="putLiveAgentHandoff" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putLiveAgentHandoff"></a>

```typescript
public putLiveAgentHandoff(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putLiveAgentHandoff.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff</a>

---

##### `putOutputAudioText` <a name="putOutputAudioText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putOutputAudioText"></a>

```typescript
public putOutputAudioText(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putOutputAudioText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText</a>

---

##### `putPlayAudio` <a name="putPlayAudio" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putPlayAudio"></a>

```typescript
public putPlayAudio(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putPlayAudio.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio</a>

---

##### `putTelephonyTransferCall` <a name="putTelephonyTransferCall" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putTelephonyTransferCall"></a>

```typescript
public putTelephonyTransferCall(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putTelephonyTransferCall.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall</a>

---

##### `putText` <a name="putText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putText"></a>

```typescript
public putText(value: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.putText.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText</a>

---

##### `resetChannel` <a name="resetChannel" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetChannel"></a>

```typescript
public resetChannel(): void
```

##### `resetConversationSuccess` <a name="resetConversationSuccess" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetConversationSuccess"></a>

```typescript
public resetConversationSuccess(): void
```

##### `resetLiveAgentHandoff` <a name="resetLiveAgentHandoff" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetLiveAgentHandoff"></a>

```typescript
public resetLiveAgentHandoff(): void
```

##### `resetOutputAudioText` <a name="resetOutputAudioText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetOutputAudioText"></a>

```typescript
public resetOutputAudioText(): void
```

##### `resetPayload` <a name="resetPayload" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetPayload"></a>

```typescript
public resetPayload(): void
```

##### `resetPlayAudio` <a name="resetPlayAudio" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetPlayAudio"></a>

```typescript
public resetPlayAudio(): void
```

##### `resetTelephonyTransferCall` <a name="resetTelephonyTransferCall" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetTelephonyTransferCall"></a>

```typescript
public resetTelephonyTransferCall(): void
```

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.conversationSuccess">conversationSuccess</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.liveAgentHandoff">liveAgentHandoff</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.outputAudioText">outputAudioText</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.playAudio">playAudio</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.telephonyTransferCall">telephonyTransferCall</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.text">text</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.channelInput">channelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.conversationSuccessInput">conversationSuccessInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.liveAgentHandoffInput">liveAgentHandoffInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.outputAudioTextInput">outputAudioTextInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.payloadInput">payloadInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.playAudioInput">playAudioInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.telephonyTransferCallInput">telephonyTransferCallInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.textInput">textInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.channel">channel</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.payload">payload</a></code> | <code>string</code> | *No description.* |
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

##### `conversationSuccess`<sup>Required</sup> <a name="conversationSuccess" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.conversationSuccess"></a>

```typescript
public readonly conversationSuccess: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccessOutputReference</a>

---

##### `liveAgentHandoff`<sup>Required</sup> <a name="liveAgentHandoff" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.liveAgentHandoff"></a>

```typescript
public readonly liveAgentHandoff: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoffOutputReference</a>

---

##### `outputAudioText`<sup>Required</sup> <a name="outputAudioText" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.outputAudioText"></a>

```typescript
public readonly outputAudioText: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioTextOutputReference</a>

---

##### `playAudio`<sup>Required</sup> <a name="playAudio" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.playAudio"></a>

```typescript
public readonly playAudio: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference</a>

---

##### `telephonyTransferCall`<sup>Required</sup> <a name="telephonyTransferCall" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.telephonyTransferCall"></a>

```typescript
public readonly telephonyTransferCall: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference</a>

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.text"></a>

```typescript
public readonly text: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTextOutputReference</a>

---

##### `channelInput`<sup>Optional</sup> <a name="channelInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.channelInput"></a>

```typescript
public readonly channelInput: string;
```

- *Type:* string

---

##### `conversationSuccessInput`<sup>Optional</sup> <a name="conversationSuccessInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.conversationSuccessInput"></a>

```typescript
public readonly conversationSuccessInput: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesConversationSuccess</a>

---

##### `liveAgentHandoffInput`<sup>Optional</sup> <a name="liveAgentHandoffInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.liveAgentHandoffInput"></a>

```typescript
public readonly liveAgentHandoffInput: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesLiveAgentHandoff</a>

---

##### `outputAudioTextInput`<sup>Optional</sup> <a name="outputAudioTextInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.outputAudioTextInput"></a>

```typescript
public readonly outputAudioTextInput: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputAudioText</a>

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.payloadInput"></a>

```typescript
public readonly payloadInput: string;
```

- *Type:* string

---

##### `playAudioInput`<sup>Optional</sup> <a name="playAudioInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.playAudioInput"></a>

```typescript
public readonly playAudioInput: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio</a>

---

##### `telephonyTransferCallInput`<sup>Optional</sup> <a name="telephonyTransferCallInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.telephonyTransferCallInput"></a>

```typescript
public readonly telephonyTransferCallInput: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall</a>

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.textInput"></a>

```typescript
public readonly textInput: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesText</a>

---

##### `channel`<sup>Required</sup> <a name="channel" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.channel"></a>

```typescript
public readonly channel: string;
```

- *Type:* string

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.payload"></a>

```typescript
public readonly payload: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>

---


### DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.allowPlaybackInterruption">allowPlaybackInterruption</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.audioUriInput">audioUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.audioUri">audioUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowPlaybackInterruption`<sup>Required</sup> <a name="allowPlaybackInterruption" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.allowPlaybackInterruption"></a>

```typescript
public readonly allowPlaybackInterruption: IResolvable;
```

- *Type:* cdktf.IResolvable

---

##### `audioUriInput`<sup>Optional</sup> <a name="audioUriInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.audioUriInput"></a>

```typescript
public readonly audioUriInput: string;
```

- *Type:* string

---

##### `audioUri`<sup>Required</sup> <a name="audioUri" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.audioUri"></a>

```typescript
public readonly audioUri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudioOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesPlayAudio</a>

---


### DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.phoneNumberInput"></a>

```typescript
public readonly phoneNumberInput: string;
```

- *Type:* string

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.phoneNumber"></a>

```typescript
public readonly phoneNumber: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCallOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesTelephonyTransferCall</a>

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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putConditionalCases">putConditionalCases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putMessages">putMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putSetParameterActions">putSetParameterActions</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetConditionalCases">resetConditionalCases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetMessages">resetMessages</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetReturnPartialResponses">resetReturnPartialResponses</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetSetParameterActions">resetSetParameterActions</a></code> | *No description.* |
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

##### `putConditionalCases` <a name="putConditionalCases" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putConditionalCases"></a>

```typescript
public putConditionalCases(value: IResolvable | DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putConditionalCases.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases">DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases</a>[]

---

##### `putMessages` <a name="putMessages" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putMessages"></a>

```typescript
public putMessages(value: IResolvable | DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putMessages.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>[]

---

##### `putSetParameterActions` <a name="putSetParameterActions" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putSetParameterActions"></a>

```typescript
public putSetParameterActions(value: IResolvable | DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.putSetParameterActions.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions">DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions</a>[]

---

##### `resetConditionalCases` <a name="resetConditionalCases" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetConditionalCases"></a>

```typescript
public resetConditionalCases(): void
```

##### `resetMessages` <a name="resetMessages" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetMessages"></a>

```typescript
public resetMessages(): void
```

##### `resetReturnPartialResponses` <a name="resetReturnPartialResponses" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetReturnPartialResponses"></a>

```typescript
public resetReturnPartialResponses(): void
```

##### `resetSetParameterActions` <a name="resetSetParameterActions" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.resetSetParameterActions"></a>

```typescript
public resetSetParameterActions(): void
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
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.conditionalCases">conditionalCases</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList">DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.messages">messages</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.setParameterActions">setParameterActions</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList">DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.conditionalCasesInput">conditionalCasesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases">DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.messagesInput">messagesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessages</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.returnPartialResponsesInput">returnPartialResponsesInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.setParameterActionsInput">setParameterActionsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions">DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions</a>[]</code> | *No description.* |
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

##### `conditionalCases`<sup>Required</sup> <a name="conditionalCases" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.conditionalCases"></a>

```typescript
public readonly conditionalCases: DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList">DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCasesList</a>

---

##### `messages`<sup>Required</sup> <a name="messages" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.messages"></a>

```typescript
public readonly messages: DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList">DialogflowCxFlowTransitionRoutesTriggerFulfillmentMessagesList</a>

---

##### `setParameterActions`<sup>Required</sup> <a name="setParameterActions" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.setParameterActions"></a>

```typescript
public readonly setParameterActions: DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList">DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList</a>

---

##### `conditionalCasesInput`<sup>Optional</sup> <a name="conditionalCasesInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.conditionalCasesInput"></a>

```typescript
public readonly conditionalCasesInput: IResolvable | DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases">DialogflowCxFlowTransitionRoutesTriggerFulfillmentConditionalCases</a>[]

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

##### `setParameterActionsInput`<sup>Optional</sup> <a name="setParameterActionsInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentOutputReference.property.setParameterActionsInput"></a>

```typescript
public readonly setParameterActionsInput: IResolvable | DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions">DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions</a>[]

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


### DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.get"></a>

```typescript
public get(index: number): DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions">DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions">DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions</a>[]

---


### DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference <a name="DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxFlow } from '@cdktf/provider-google'

new dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.resetParameter">resetParameter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameter` <a name="resetParameter" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.resetParameter"></a>

```typescript
public resetParameter(): void
```

##### `resetValue` <a name="resetValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.resetValue"></a>

```typescript
public resetValue(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.parameterInput">parameterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.parameter">parameter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions">DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterInput`<sup>Optional</sup> <a name="parameterInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.parameterInput"></a>

```typescript
public readonly parameterInput: string;
```

- *Type:* string

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `parameter`<sup>Required</sup> <a name="parameter" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.parameter"></a>

```typescript
public readonly parameter: string;
```

- *Type:* string

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxFlow.DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions">DialogflowCxFlowTransitionRoutesTriggerFulfillmentSetParameterActions</a>

---



