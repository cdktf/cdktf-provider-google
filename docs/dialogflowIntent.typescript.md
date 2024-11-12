# `dialogflowIntent` Submodule <a name="`dialogflowIntent` Submodule" id="@cdktf/provider-google.dialogflowIntent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowIntent <a name="DialogflowIntent" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent google_dialogflow_intent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer"></a>

```typescript
import { dialogflowIntent } from '@cdktf/provider-google'

new dialogflowIntent.DialogflowIntent(scope: Construct, id: string, config: DialogflowIntentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig">DialogflowIntentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig">DialogflowIntentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetDefaultResponsePlatforms">resetDefaultResponsePlatforms</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetEvents">resetEvents</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetInputContextNames">resetInputContextNames</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetIsFallback">resetIsFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetMlDisabled">resetMlDisabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetParentFollowupIntentName">resetParentFollowupIntentName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetResetContexts">resetResetContexts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetWebhookState">resetWebhookState</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.putTimeouts"></a>

```typescript
public putTimeouts(value: DialogflowIntentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetAction"></a>

```typescript
public resetAction(): void
```

##### `resetDefaultResponsePlatforms` <a name="resetDefaultResponsePlatforms" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetDefaultResponsePlatforms"></a>

```typescript
public resetDefaultResponsePlatforms(): void
```

##### `resetEvents` <a name="resetEvents" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetEvents"></a>

```typescript
public resetEvents(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInputContextNames` <a name="resetInputContextNames" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetInputContextNames"></a>

```typescript
public resetInputContextNames(): void
```

##### `resetIsFallback` <a name="resetIsFallback" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetIsFallback"></a>

```typescript
public resetIsFallback(): void
```

##### `resetMlDisabled` <a name="resetMlDisabled" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetMlDisabled"></a>

```typescript
public resetMlDisabled(): void
```

##### `resetParentFollowupIntentName` <a name="resetParentFollowupIntentName" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetParentFollowupIntentName"></a>

```typescript
public resetParentFollowupIntentName(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetResetContexts` <a name="resetResetContexts" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetResetContexts"></a>

```typescript
public resetResetContexts(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetWebhookState` <a name="resetWebhookState" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.resetWebhookState"></a>

```typescript
public resetWebhookState(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DialogflowIntent resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.isConstruct"></a>

```typescript
import { dialogflowIntent } from '@cdktf/provider-google'

dialogflowIntent.DialogflowIntent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.isTerraformElement"></a>

```typescript
import { dialogflowIntent } from '@cdktf/provider-google'

dialogflowIntent.DialogflowIntent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.isTerraformResource"></a>

```typescript
import { dialogflowIntent } from '@cdktf/provider-google'

dialogflowIntent.DialogflowIntent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.generateConfigForImport"></a>

```typescript
import { dialogflowIntent } from '@cdktf/provider-google'

dialogflowIntent.DialogflowIntent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DialogflowIntent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowIntent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowIntent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowIntent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.followupIntentInfo">followupIntentInfo</a></code> | <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList">DialogflowIntentFollowupIntentInfoList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.rootFollowupIntentName">rootFollowupIntentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference">DialogflowIntentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.actionInput">actionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.defaultResponsePlatformsInput">defaultResponsePlatformsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.eventsInput">eventsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.inputContextNamesInput">inputContextNamesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.isFallbackInput">isFallbackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.mlDisabledInput">mlDisabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.parentFollowupIntentNameInput">parentFollowupIntentNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.resetContextsInput">resetContextsInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.webhookStateInput">webhookStateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.action">action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.defaultResponsePlatforms">defaultResponsePlatforms</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.events">events</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.inputContextNames">inputContextNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.isFallback">isFallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.mlDisabled">mlDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.parentFollowupIntentName">parentFollowupIntentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.priority">priority</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.resetContexts">resetContexts</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.webhookState">webhookState</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `followupIntentInfo`<sup>Required</sup> <a name="followupIntentInfo" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.followupIntentInfo"></a>

```typescript
public readonly followupIntentInfo: DialogflowIntentFollowupIntentInfoList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList">DialogflowIntentFollowupIntentInfoList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rootFollowupIntentName`<sup>Required</sup> <a name="rootFollowupIntentName" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.rootFollowupIntentName"></a>

```typescript
public readonly rootFollowupIntentName: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowIntentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference">DialogflowIntentTimeoutsOutputReference</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.actionInput"></a>

```typescript
public readonly actionInput: string;
```

- *Type:* string

---

##### `defaultResponsePlatformsInput`<sup>Optional</sup> <a name="defaultResponsePlatformsInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.defaultResponsePlatformsInput"></a>

```typescript
public readonly defaultResponsePlatformsInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `eventsInput`<sup>Optional</sup> <a name="eventsInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.eventsInput"></a>

```typescript
public readonly eventsInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `inputContextNamesInput`<sup>Optional</sup> <a name="inputContextNamesInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.inputContextNamesInput"></a>

```typescript
public readonly inputContextNamesInput: string[];
```

- *Type:* string[]

---

##### `isFallbackInput`<sup>Optional</sup> <a name="isFallbackInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.isFallbackInput"></a>

```typescript
public readonly isFallbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mlDisabledInput`<sup>Optional</sup> <a name="mlDisabledInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.mlDisabledInput"></a>

```typescript
public readonly mlDisabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `parentFollowupIntentNameInput`<sup>Optional</sup> <a name="parentFollowupIntentNameInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.parentFollowupIntentNameInput"></a>

```typescript
public readonly parentFollowupIntentNameInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `resetContextsInput`<sup>Optional</sup> <a name="resetContextsInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.resetContextsInput"></a>

```typescript
public readonly resetContextsInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DialogflowIntentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a>

---

##### `webhookStateInput`<sup>Optional</sup> <a name="webhookStateInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.webhookStateInput"></a>

```typescript
public readonly webhookStateInput: string;
```

- *Type:* string

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

---

##### `defaultResponsePlatforms`<sup>Required</sup> <a name="defaultResponsePlatforms" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.defaultResponsePlatforms"></a>

```typescript
public readonly defaultResponsePlatforms: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `events`<sup>Required</sup> <a name="events" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `inputContextNames`<sup>Required</sup> <a name="inputContextNames" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.inputContextNames"></a>

```typescript
public readonly inputContextNames: string[];
```

- *Type:* string[]

---

##### `isFallback`<sup>Required</sup> <a name="isFallback" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.isFallback"></a>

```typescript
public readonly isFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `mlDisabled`<sup>Required</sup> <a name="mlDisabled" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.mlDisabled"></a>

```typescript
public readonly mlDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `parentFollowupIntentName`<sup>Required</sup> <a name="parentFollowupIntentName" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.parentFollowupIntentName"></a>

```typescript
public readonly parentFollowupIntentName: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `resetContexts`<sup>Required</sup> <a name="resetContexts" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.resetContexts"></a>

```typescript
public readonly resetContexts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `webhookState`<sup>Required</sup> <a name="webhookState" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.webhookState"></a>

```typescript
public readonly webhookState: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowIntentConfig <a name="DialogflowIntentConfig" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.Initializer"></a>

```typescript
import { dialogflowIntent } from '@cdktf/provider-google'

const dialogflowIntentConfig: dialogflowIntent.DialogflowIntentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.displayName">displayName</a></code> | <code>string</code> | The name of this intent to be displayed on the console. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.action">action</a></code> | <code>string</code> | The name of the action associated with the intent. Note: The action name must not contain whitespaces. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.defaultResponsePlatforms">defaultResponsePlatforms</a></code> | <code>string[]</code> | The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"]. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.events">events</a></code> | <code>string[]</code> | The collection of event names that trigger the intent. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#id DialogflowIntent#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.inputContextNames">inputContextNames</a></code> | <code>string[]</code> | The list of context names required for this intent to be triggered. Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.isFallback">isFallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether this is a fallback intent. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.mlDisabled">mlDisabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether Machine Learning is disabled for the intent. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.parentFollowupIntentName">parentFollowupIntentName</a></code> | <code>string</code> | The unique identifier of the parent intent in the chain of followup intents. Format: projects/<Project ID>/agent/intents/<Intent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.priority">priority</a></code> | <code>number</code> | The priority of this intent. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#project DialogflowIntent#project}. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.resetContexts">resetContexts</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether to delete all contexts in the current session when this intent is matched. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.webhookState">webhookState</a></code> | <code>string</code> | Indicates whether webhooks are enabled for the intent. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The name of this intent to be displayed on the console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#display_name DialogflowIntent#display_name}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.action"></a>

```typescript
public readonly action: string;
```

- *Type:* string

The name of the action associated with the intent. Note: The action name must not contain whitespaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#action DialogflowIntent#action}

---

##### `defaultResponsePlatforms`<sup>Optional</sup> <a name="defaultResponsePlatforms" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.defaultResponsePlatforms"></a>

```typescript
public readonly defaultResponsePlatforms: string[];
```

- *Type:* string[]

The list of platforms for which the first responses will be copied from the messages in PLATFORM_UNSPECIFIED (i.e. default platform). Possible values: ["FACEBOOK", "SLACK", "TELEGRAM", "KIK", "SKYPE", "LINE", "VIBER", "ACTIONS_ON_GOOGLE", "GOOGLE_HANGOUTS"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#default_response_platforms DialogflowIntent#default_response_platforms}

---

##### `events`<sup>Optional</sup> <a name="events" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.events"></a>

```typescript
public readonly events: string[];
```

- *Type:* string[]

The collection of event names that trigger the intent.

If the collection of input contexts is not empty, all of
the contexts must be present in the active user session for an event to trigger this intent. See the
[events reference](https://cloud.google.com/dialogflow/docs/events-overview) for more details.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#events DialogflowIntent#events}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#id DialogflowIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inputContextNames`<sup>Optional</sup> <a name="inputContextNames" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.inputContextNames"></a>

```typescript
public readonly inputContextNames: string[];
```

- *Type:* string[]

The list of context names required for this intent to be triggered. Format: projects/<Project ID>/agent/sessions/-/contexts/<Context ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#input_context_names DialogflowIntent#input_context_names}

---

##### `isFallback`<sup>Optional</sup> <a name="isFallback" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.isFallback"></a>

```typescript
public readonly isFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether this is a fallback intent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#is_fallback DialogflowIntent#is_fallback}

---

##### `mlDisabled`<sup>Optional</sup> <a name="mlDisabled" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.mlDisabled"></a>

```typescript
public readonly mlDisabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether Machine Learning is disabled for the intent.

Note: If mlDisabled setting is set to true, then this intent is not taken into account during inference in ML
ONLY match mode. Also, auto-markup in the UI is turned off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#ml_disabled DialogflowIntent#ml_disabled}

---

##### `parentFollowupIntentName`<sup>Optional</sup> <a name="parentFollowupIntentName" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.parentFollowupIntentName"></a>

```typescript
public readonly parentFollowupIntentName: string;
```

- *Type:* string

The unique identifier of the parent intent in the chain of followup intents. Format: projects/<Project ID>/agent/intents/<Intent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#parent_followup_intent_name DialogflowIntent#parent_followup_intent_name}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The priority of this intent.

Higher numbers represent higher priorities.
  - If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds
  to the Normal priority in the console.
  - If the supplied value is negative, the intent is ignored in runtime detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#priority DialogflowIntent#priority}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#project DialogflowIntent#project}.

---

##### `resetContexts`<sup>Optional</sup> <a name="resetContexts" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.resetContexts"></a>

```typescript
public readonly resetContexts: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether to delete all contexts in the current session when this intent is matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#reset_contexts DialogflowIntent#reset_contexts}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowIntentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#timeouts DialogflowIntent#timeouts}

---

##### `webhookState`<sup>Optional</sup> <a name="webhookState" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentConfig.property.webhookState"></a>

```typescript
public readonly webhookState: string;
```

- *Type:* string

Indicates whether webhooks are enabled for the intent.

* WEBHOOK_STATE_ENABLED: Webhook is enabled in the agent and in the intent.
* WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING: Webhook is enabled in the agent and in the intent. Also, each slot
filling prompt is forwarded to the webhook. Possible values: ["WEBHOOK_STATE_ENABLED", "WEBHOOK_STATE_ENABLED_FOR_SLOT_FILLING"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#webhook_state DialogflowIntent#webhook_state}

---

### DialogflowIntentFollowupIntentInfo <a name="DialogflowIntentFollowupIntentInfo" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfo"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfo.Initializer"></a>

```typescript
import { dialogflowIntent } from '@cdktf/provider-google'

const dialogflowIntentFollowupIntentInfo: dialogflowIntent.DialogflowIntentFollowupIntentInfo = { ... }
```


### DialogflowIntentTimeouts <a name="DialogflowIntentTimeouts" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts.Initializer"></a>

```typescript
import { dialogflowIntent } from '@cdktf/provider-google'

const dialogflowIntentTimeouts: dialogflowIntent.DialogflowIntentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#create DialogflowIntent#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#delete DialogflowIntent#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#update DialogflowIntent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#create DialogflowIntent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#delete DialogflowIntent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.11.0/docs/resources/dialogflow_intent#update DialogflowIntent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowIntentFollowupIntentInfoList <a name="DialogflowIntentFollowupIntentInfoList" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer"></a>

```typescript
import { dialogflowIntent } from '@cdktf/provider-google'

new dialogflowIntent.DialogflowIntentFollowupIntentInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.get"></a>

```typescript
public get(index: number): DialogflowIntentFollowupIntentInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DialogflowIntentFollowupIntentInfoOutputReference <a name="DialogflowIntentFollowupIntentInfoOutputReference" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer"></a>

```typescript
import { dialogflowIntent } from '@cdktf/provider-google'

new dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.followupIntentName">followupIntentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.parentFollowupIntentName">parentFollowupIntentName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfo">DialogflowIntentFollowupIntentInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `followupIntentName`<sup>Required</sup> <a name="followupIntentName" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.followupIntentName"></a>

```typescript
public readonly followupIntentName: string;
```

- *Type:* string

---

##### `parentFollowupIntentName`<sup>Required</sup> <a name="parentFollowupIntentName" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.parentFollowupIntentName"></a>

```typescript
public readonly parentFollowupIntentName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowIntentFollowupIntentInfo;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentFollowupIntentInfo">DialogflowIntentFollowupIntentInfo</a>

---


### DialogflowIntentTimeoutsOutputReference <a name="DialogflowIntentTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer"></a>

```typescript
import { dialogflowIntent } from '@cdktf/provider-google'

new dialogflowIntent.DialogflowIntentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowIntentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowIntent.DialogflowIntentTimeouts">DialogflowIntentTimeouts</a>

---



