# `dialogflowCxPlaybook` Submodule <a name="`dialogflowCxPlaybook` Submodule" id="@cdktf/provider-google.dialogflowCxPlaybook"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxPlaybook <a name="DialogflowCxPlaybook" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook google_dialogflow_cx_playbook}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer"></a>

```typescript
import { dialogflowCxPlaybook } from '@cdktf/provider-google'

new dialogflowCxPlaybook.DialogflowCxPlaybook(scope: Construct, id: string, config: DialogflowCxPlaybookConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig">DialogflowCxPlaybookConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig">DialogflowCxPlaybookConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putInstruction">putInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putLlmModelSettings">putLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetInstruction">resetInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetLlmModelSettings">resetLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetPlaybookType">resetPlaybookType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetReferencedTools">resetReferencedTools</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInstruction` <a name="putInstruction" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putInstruction"></a>

```typescript
public putInstruction(value: DialogflowCxPlaybookInstruction): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putInstruction.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a>

---

##### `putLlmModelSettings` <a name="putLlmModelSettings" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putLlmModelSettings"></a>

```typescript
public putLlmModelSettings(value: DialogflowCxPlaybookLlmModelSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putLlmModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putTimeouts"></a>

```typescript
public putTimeouts(value: DialogflowCxPlaybookTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts">DialogflowCxPlaybookTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetId"></a>

```typescript
public resetId(): void
```

##### `resetInstruction` <a name="resetInstruction" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetInstruction"></a>

```typescript
public resetInstruction(): void
```

##### `resetLlmModelSettings` <a name="resetLlmModelSettings" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetLlmModelSettings"></a>

```typescript
public resetLlmModelSettings(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetPlaybookType` <a name="resetPlaybookType" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetPlaybookType"></a>

```typescript
public resetPlaybookType(): void
```

##### `resetReferencedTools` <a name="resetReferencedTools" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetReferencedTools"></a>

```typescript
public resetReferencedTools(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DialogflowCxPlaybook resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isConstruct"></a>

```typescript
import { dialogflowCxPlaybook } from '@cdktf/provider-google'

dialogflowCxPlaybook.DialogflowCxPlaybook.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformElement"></a>

```typescript
import { dialogflowCxPlaybook } from '@cdktf/provider-google'

dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformResource"></a>

```typescript
import { dialogflowCxPlaybook } from '@cdktf/provider-google'

dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.generateConfigForImport"></a>

```typescript
import { dialogflowCxPlaybook } from '@cdktf/provider-google'

dialogflowCxPlaybook.DialogflowCxPlaybook.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DialogflowCxPlaybook resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowCxPlaybook to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowCxPlaybook that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowCxPlaybook to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.createTime">createTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.instruction">instruction</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference">DialogflowCxPlaybookInstructionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference">DialogflowCxPlaybookLlmModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedFlows">referencedFlows</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedPlaybooks">referencedPlaybooks</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference">DialogflowCxPlaybookTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.tokenCount">tokenCount</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.updateTime">updateTime</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.goalInput">goalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.instructionInput">instructionInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.llmModelSettingsInput">llmModelSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.playbookTypeInput">playbookTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedToolsInput">referencedToolsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts">DialogflowCxPlaybookTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.goal">goal</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.playbookType">playbookType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedTools">referencedTools</a></code> | <code>string[]</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.createTime"></a>

```typescript
public readonly createTime: string;
```

- *Type:* string

---

##### `instruction`<sup>Required</sup> <a name="instruction" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.instruction"></a>

```typescript
public readonly instruction: DialogflowCxPlaybookInstructionOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference">DialogflowCxPlaybookInstructionOutputReference</a>

---

##### `llmModelSettings`<sup>Required</sup> <a name="llmModelSettings" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.llmModelSettings"></a>

```typescript
public readonly llmModelSettings: DialogflowCxPlaybookLlmModelSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference">DialogflowCxPlaybookLlmModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `referencedFlows`<sup>Required</sup> <a name="referencedFlows" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedFlows"></a>

```typescript
public readonly referencedFlows: string[];
```

- *Type:* string[]

---

##### `referencedPlaybooks`<sup>Required</sup> <a name="referencedPlaybooks" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedPlaybooks"></a>

```typescript
public readonly referencedPlaybooks: string[];
```

- *Type:* string[]

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxPlaybookTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference">DialogflowCxPlaybookTimeoutsOutputReference</a>

---

##### `tokenCount`<sup>Required</sup> <a name="tokenCount" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.tokenCount"></a>

```typescript
public readonly tokenCount: string;
```

- *Type:* string

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.updateTime"></a>

```typescript
public readonly updateTime: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `goalInput`<sup>Optional</sup> <a name="goalInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.goalInput"></a>

```typescript
public readonly goalInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `instructionInput`<sup>Optional</sup> <a name="instructionInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.instructionInput"></a>

```typescript
public readonly instructionInput: DialogflowCxPlaybookInstruction;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a>

---

##### `llmModelSettingsInput`<sup>Optional</sup> <a name="llmModelSettingsInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.llmModelSettingsInput"></a>

```typescript
public readonly llmModelSettingsInput: DialogflowCxPlaybookLlmModelSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `playbookTypeInput`<sup>Optional</sup> <a name="playbookTypeInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.playbookTypeInput"></a>

```typescript
public readonly playbookTypeInput: string;
```

- *Type:* string

---

##### `referencedToolsInput`<sup>Optional</sup> <a name="referencedToolsInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedToolsInput"></a>

```typescript
public readonly referencedToolsInput: string[];
```

- *Type:* string[]

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DialogflowCxPlaybookTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts">DialogflowCxPlaybookTimeouts</a>

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.goal"></a>

```typescript
public readonly goal: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `playbookType`<sup>Required</sup> <a name="playbookType" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.playbookType"></a>

```typescript
public readonly playbookType: string;
```

- *Type:* string

---

##### `referencedTools`<sup>Required</sup> <a name="referencedTools" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.referencedTools"></a>

```typescript
public readonly referencedTools: string[];
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybook.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxPlaybookConfig <a name="DialogflowCxPlaybookConfig" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.Initializer"></a>

```typescript
import { dialogflowCxPlaybook } from '@cdktf/provider-google'

const dialogflowCxPlaybookConfig: dialogflowCxPlaybook.DialogflowCxPlaybookConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name of the playbook, unique within an agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.goal">goal</a></code> | <code>string</code> | High level description of the goal the playbook intend to accomplish. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#id DialogflowCxPlaybook#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.instruction">instruction</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a></code> | instruction block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.parent">parent</a></code> | <code>string</code> | The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.playbookType">playbookType</a></code> | <code>string</code> | Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"]. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.referencedTools">referencedTools</a></code> | <code>string[]</code> | The resource name of tools referenced by the current playbook in the instructions. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts">DialogflowCxPlaybookTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name of the playbook, unique within an agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#display_name DialogflowCxPlaybook#display_name}

---

##### `goal`<sup>Required</sup> <a name="goal" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.goal"></a>

```typescript
public readonly goal: string;
```

- *Type:* string

High level description of the goal the playbook intend to accomplish.

A goal should be concise since it's visible to other playbooks that may reference this playbook.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#goal DialogflowCxPlaybook#goal}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#id DialogflowCxPlaybook#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `instruction`<sup>Optional</sup> <a name="instruction" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.instruction"></a>

```typescript
public readonly instruction: DialogflowCxPlaybookInstruction;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a>

instruction block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#instruction DialogflowCxPlaybook#instruction}

---

##### `llmModelSettings`<sup>Optional</sup> <a name="llmModelSettings" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.llmModelSettings"></a>

```typescript
public readonly llmModelSettings: DialogflowCxPlaybookLlmModelSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#llm_model_settings DialogflowCxPlaybook#llm_model_settings}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The agent to create a Playbook for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#parent DialogflowCxPlaybook#parent}

---

##### `playbookType`<sup>Optional</sup> <a name="playbookType" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.playbookType"></a>

```typescript
public readonly playbookType: string;
```

- *Type:* string

Type of the playbook. Possible values: ["PLAYBOOK_TYPE_UNSPECIFIED", "TASK", "ROUTINE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#playbook_type DialogflowCxPlaybook#playbook_type}

---

##### `referencedTools`<sup>Optional</sup> <a name="referencedTools" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.referencedTools"></a>

```typescript
public readonly referencedTools: string[];
```

- *Type:* string[]

The resource name of tools referenced by the current playbook in the instructions.

If not provided explicitly, they are will be implied using the tool being referenced in goal and steps.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#referenced_tools DialogflowCxPlaybook#referenced_tools}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxPlaybookTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts">DialogflowCxPlaybookTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#timeouts DialogflowCxPlaybook#timeouts}

---

### DialogflowCxPlaybookInstruction <a name="DialogflowCxPlaybookInstruction" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction.Initializer"></a>

```typescript
import { dialogflowCxPlaybook } from '@cdktf/provider-google'

const dialogflowCxPlaybookInstruction: dialogflowCxPlaybook.DialogflowCxPlaybookInstruction = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction.property.guidelines">guidelines</a></code> | <code>string</code> | General guidelines for the playbook. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction.property.steps">steps</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps">DialogflowCxPlaybookInstructionSteps</a>[]</code> | steps block. |

---

##### `guidelines`<sup>Optional</sup> <a name="guidelines" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction.property.guidelines"></a>

```typescript
public readonly guidelines: string;
```

- *Type:* string

General guidelines for the playbook.

These are unstructured instructions that are not directly part of the goal, e.g. "Always be polite". It's valid for this text to be long and used instead of steps altogether.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#guidelines DialogflowCxPlaybook#guidelines}

---

##### `steps`<sup>Optional</sup> <a name="steps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction.property.steps"></a>

```typescript
public readonly steps: IResolvable | DialogflowCxPlaybookInstructionSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps">DialogflowCxPlaybookInstructionSteps</a>[]

steps block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#steps DialogflowCxPlaybook#steps}

---

### DialogflowCxPlaybookInstructionSteps <a name="DialogflowCxPlaybookInstructionSteps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps.Initializer"></a>

```typescript
import { dialogflowCxPlaybook } from '@cdktf/provider-google'

const dialogflowCxPlaybookInstructionSteps: dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps.property.steps">steps</a></code> | <code>string</code> | Sub-processing needed to execute the current step. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps.property.text">text</a></code> | <code>string</code> | Step instruction in text format. |

---

##### `steps`<sup>Optional</sup> <a name="steps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps.property.steps"></a>

```typescript
public readonly steps: string;
```

- *Type:* string

Sub-processing needed to execute the current step.

This field uses JSON data as a string. The value provided must be a valid JSON representation documented in [Step](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.playbooks#step).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#steps DialogflowCxPlaybook#steps}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Step instruction in text format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#text DialogflowCxPlaybook#text}

---

### DialogflowCxPlaybookLlmModelSettings <a name="DialogflowCxPlaybookLlmModelSettings" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings.Initializer"></a>

```typescript
import { dialogflowCxPlaybook } from '@cdktf/provider-google'

const dialogflowCxPlaybookLlmModelSettings: dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings.property.model">model</a></code> | <code>string</code> | The selected LLM model. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings.property.promptText">promptText</a></code> | <code>string</code> | The custom prompt to use. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#model DialogflowCxPlaybook#model}

---

##### `promptText`<sup>Optional</sup> <a name="promptText" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings.property.promptText"></a>

```typescript
public readonly promptText: string;
```

- *Type:* string

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#prompt_text DialogflowCxPlaybook#prompt_text}

---

### DialogflowCxPlaybookTimeouts <a name="DialogflowCxPlaybookTimeouts" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.Initializer"></a>

```typescript
import { dialogflowCxPlaybook } from '@cdktf/provider-google'

const dialogflowCxPlaybookTimeouts: dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#create DialogflowCxPlaybook#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#delete DialogflowCxPlaybook#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#update DialogflowCxPlaybook#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#create DialogflowCxPlaybook#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#delete DialogflowCxPlaybook#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.48.0/docs/resources/dialogflow_cx_playbook#update DialogflowCxPlaybook#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxPlaybookInstructionOutputReference <a name="DialogflowCxPlaybookInstructionOutputReference" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPlaybook } from '@cdktf/provider-google'

new dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.putSteps">putSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resetGuidelines">resetGuidelines</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resetSteps">resetSteps</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSteps` <a name="putSteps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.putSteps"></a>

```typescript
public putSteps(value: IResolvable | DialogflowCxPlaybookInstructionSteps[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.putSteps.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps">DialogflowCxPlaybookInstructionSteps</a>[]

---

##### `resetGuidelines` <a name="resetGuidelines" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resetGuidelines"></a>

```typescript
public resetGuidelines(): void
```

##### `resetSteps` <a name="resetSteps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.resetSteps"></a>

```typescript
public resetSteps(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.steps">steps</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList">DialogflowCxPlaybookInstructionStepsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.guidelinesInput">guidelinesInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.stepsInput">stepsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps">DialogflowCxPlaybookInstructionSteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.guidelines">guidelines</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.steps"></a>

```typescript
public readonly steps: DialogflowCxPlaybookInstructionStepsList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList">DialogflowCxPlaybookInstructionStepsList</a>

---

##### `guidelinesInput`<sup>Optional</sup> <a name="guidelinesInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.guidelinesInput"></a>

```typescript
public readonly guidelinesInput: string;
```

- *Type:* string

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.stepsInput"></a>

```typescript
public readonly stepsInput: IResolvable | DialogflowCxPlaybookInstructionSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps">DialogflowCxPlaybookInstructionSteps</a>[]

---

##### `guidelines`<sup>Required</sup> <a name="guidelines" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.guidelines"></a>

```typescript
public readonly guidelines: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPlaybookInstruction;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstruction">DialogflowCxPlaybookInstruction</a>

---


### DialogflowCxPlaybookInstructionStepsList <a name="DialogflowCxPlaybookInstructionStepsList" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer"></a>

```typescript
import { dialogflowCxPlaybook } from '@cdktf/provider-google'

new dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.get"></a>

```typescript
public get(index: number): DialogflowCxPlaybookInstructionStepsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps">DialogflowCxPlaybookInstructionSteps</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxPlaybookInstructionSteps[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps">DialogflowCxPlaybookInstructionSteps</a>[]

---


### DialogflowCxPlaybookInstructionStepsOutputReference <a name="DialogflowCxPlaybookInstructionStepsOutputReference" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPlaybook } from '@cdktf/provider-google'

new dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resetSteps">resetSteps</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSteps` <a name="resetSteps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resetSteps"></a>

```typescript
public resetSteps(): void
```

##### `resetText` <a name="resetText" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.resetText"></a>

```typescript
public resetText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.stepsInput">stepsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.steps">steps</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps">DialogflowCxPlaybookInstructionSteps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `stepsInput`<sup>Optional</sup> <a name="stepsInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.stepsInput"></a>

```typescript
public readonly stepsInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `steps`<sup>Required</sup> <a name="steps" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.steps"></a>

```typescript
public readonly steps: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionStepsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxPlaybookInstructionSteps;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookInstructionSteps">DialogflowCxPlaybookInstructionSteps</a>

---


### DialogflowCxPlaybookLlmModelSettingsOutputReference <a name="DialogflowCxPlaybookLlmModelSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPlaybook } from '@cdktf/provider-google'

new dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resetPromptText">resetPromptText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetPromptText` <a name="resetPromptText" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.resetPromptText"></a>

```typescript
public resetPromptText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptTextInput">promptTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptText">promptText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `promptTextInput`<sup>Optional</sup> <a name="promptTextInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptTextInput"></a>

```typescript
public readonly promptTextInput: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.promptText"></a>

```typescript
public readonly promptText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxPlaybookLlmModelSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookLlmModelSettings">DialogflowCxPlaybookLlmModelSettings</a>

---


### DialogflowCxPlaybookTimeoutsOutputReference <a name="DialogflowCxPlaybookTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxPlaybook } from '@cdktf/provider-google'

new dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts">DialogflowCxPlaybookTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxPlaybookTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxPlaybook.DialogflowCxPlaybookTimeouts">DialogflowCxPlaybookTimeouts</a>

---



