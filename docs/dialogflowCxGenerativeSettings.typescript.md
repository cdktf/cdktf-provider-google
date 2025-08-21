# `dialogflowCxGenerativeSettings` Submodule <a name="`dialogflowCxGenerativeSettings` Submodule" id="@cdktf/provider-google.dialogflowCxGenerativeSettings"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxGenerativeSettings <a name="DialogflowCxGenerativeSettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings google_dialogflow_cx_generative_settings}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.Initializer"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

new dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings(scope: Construct, id: string, config: DialogflowCxGenerativeSettingsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig">DialogflowCxGenerativeSettingsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig">DialogflowCxGenerativeSettingsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.putFallbackSettings">putFallbackSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.putGenerativeSafetySettings">putGenerativeSafetySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.putKnowledgeConnectorSettings">putKnowledgeConnectorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.putLlmModelSettings">putLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.resetFallbackSettings">resetFallbackSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.resetGenerativeSafetySettings">resetGenerativeSafetySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.resetKnowledgeConnectorSettings">resetKnowledgeConnectorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.resetLlmModelSettings">resetLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.hasResourceMove"></a>

```typescript
public hasResourceMove(): TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.moveFromId"></a>

```typescript
public moveFromId(id: string): void
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.moveToId"></a>

```typescript
public moveToId(id: string): void
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFallbackSettings` <a name="putFallbackSettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.putFallbackSettings"></a>

```typescript
public putFallbackSettings(value: DialogflowCxGenerativeSettingsFallbackSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.putFallbackSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettings">DialogflowCxGenerativeSettingsFallbackSettings</a>

---

##### `putGenerativeSafetySettings` <a name="putGenerativeSafetySettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.putGenerativeSafetySettings"></a>

```typescript
public putGenerativeSafetySettings(value: DialogflowCxGenerativeSettingsGenerativeSafetySettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.putGenerativeSafetySettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettings">DialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

---

##### `putKnowledgeConnectorSettings` <a name="putKnowledgeConnectorSettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.putKnowledgeConnectorSettings"></a>

```typescript
public putKnowledgeConnectorSettings(value: DialogflowCxGenerativeSettingsKnowledgeConnectorSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.putKnowledgeConnectorSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings">DialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

---

##### `putLlmModelSettings` <a name="putLlmModelSettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.putLlmModelSettings"></a>

```typescript
public putLlmModelSettings(value: DialogflowCxGenerativeSettingsLlmModelSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.putLlmModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettings">DialogflowCxGenerativeSettingsLlmModelSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.putTimeouts"></a>

```typescript
public putTimeouts(value: DialogflowCxGenerativeSettingsTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeouts">DialogflowCxGenerativeSettingsTimeouts</a>

---

##### `resetFallbackSettings` <a name="resetFallbackSettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.resetFallbackSettings"></a>

```typescript
public resetFallbackSettings(): void
```

##### `resetGenerativeSafetySettings` <a name="resetGenerativeSafetySettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.resetGenerativeSafetySettings"></a>

```typescript
public resetGenerativeSafetySettings(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.resetId"></a>

```typescript
public resetId(): void
```

##### `resetKnowledgeConnectorSettings` <a name="resetKnowledgeConnectorSettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.resetKnowledgeConnectorSettings"></a>

```typescript
public resetKnowledgeConnectorSettings(): void
```

##### `resetLlmModelSettings` <a name="resetLlmModelSettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.resetLlmModelSettings"></a>

```typescript
public resetLlmModelSettings(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DialogflowCxGenerativeSettings resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.isConstruct"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.isTerraformElement"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.isTerraformResource"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.generateConfigForImport"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DialogflowCxGenerativeSettings resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowCxGenerativeSettings to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowCxGenerativeSettings that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowCxGenerativeSettings to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.fallbackSettings">fallbackSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference">DialogflowCxGenerativeSettingsFallbackSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.generativeSafetySettings">generativeSafetySettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference">DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.knowledgeConnectorSettings">knowledgeConnectorSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference">DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference">DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference">DialogflowCxGenerativeSettingsTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.fallbackSettingsInput">fallbackSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettings">DialogflowCxGenerativeSettingsFallbackSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.generativeSafetySettingsInput">generativeSafetySettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettings">DialogflowCxGenerativeSettingsGenerativeSafetySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.knowledgeConnectorSettingsInput">knowledgeConnectorSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings">DialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.llmModelSettingsInput">llmModelSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettings">DialogflowCxGenerativeSettingsLlmModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeouts">DialogflowCxGenerativeSettingsTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.parent">parent</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `fallbackSettings`<sup>Required</sup> <a name="fallbackSettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.fallbackSettings"></a>

```typescript
public readonly fallbackSettings: DialogflowCxGenerativeSettingsFallbackSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference">DialogflowCxGenerativeSettingsFallbackSettingsOutputReference</a>

---

##### `generativeSafetySettings`<sup>Required</sup> <a name="generativeSafetySettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.generativeSafetySettings"></a>

```typescript
public readonly generativeSafetySettings: DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference">DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference</a>

---

##### `knowledgeConnectorSettings`<sup>Required</sup> <a name="knowledgeConnectorSettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.knowledgeConnectorSettings"></a>

```typescript
public readonly knowledgeConnectorSettings: DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference">DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference</a>

---

##### `llmModelSettings`<sup>Required</sup> <a name="llmModelSettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.llmModelSettings"></a>

```typescript
public readonly llmModelSettings: DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference">DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxGenerativeSettingsTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference">DialogflowCxGenerativeSettingsTimeoutsOutputReference</a>

---

##### `fallbackSettingsInput`<sup>Optional</sup> <a name="fallbackSettingsInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.fallbackSettingsInput"></a>

```typescript
public readonly fallbackSettingsInput: DialogflowCxGenerativeSettingsFallbackSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettings">DialogflowCxGenerativeSettingsFallbackSettings</a>

---

##### `generativeSafetySettingsInput`<sup>Optional</sup> <a name="generativeSafetySettingsInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.generativeSafetySettingsInput"></a>

```typescript
public readonly generativeSafetySettingsInput: DialogflowCxGenerativeSettingsGenerativeSafetySettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettings">DialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `knowledgeConnectorSettingsInput`<sup>Optional</sup> <a name="knowledgeConnectorSettingsInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.knowledgeConnectorSettingsInput"></a>

```typescript
public readonly knowledgeConnectorSettingsInput: DialogflowCxGenerativeSettingsKnowledgeConnectorSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings">DialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `llmModelSettingsInput`<sup>Optional</sup> <a name="llmModelSettingsInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.llmModelSettingsInput"></a>

```typescript
public readonly llmModelSettingsInput: DialogflowCxGenerativeSettingsLlmModelSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettings">DialogflowCxGenerativeSettingsLlmModelSettings</a>

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DialogflowCxGenerativeSettingsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeouts">DialogflowCxGenerativeSettingsTimeouts</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettings.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxGenerativeSettingsConfig <a name="DialogflowCxGenerativeSettingsConfig" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.Initializer"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

const dialogflowCxGenerativeSettingsConfig: dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.languageCode">languageCode</a></code> | <code>string</code> | Language for this settings. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.fallbackSettings">fallbackSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettings">DialogflowCxGenerativeSettingsFallbackSettings</a></code> | fallback_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.generativeSafetySettings">generativeSafetySettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettings">DialogflowCxGenerativeSettingsGenerativeSafetySettings</a></code> | generative_safety_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#id DialogflowCxGenerativeSettings#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.knowledgeConnectorSettings">knowledgeConnectorSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings">DialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a></code> | knowledge_connector_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.llmModelSettings">llmModelSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettings">DialogflowCxGenerativeSettingsLlmModelSettings</a></code> | llm_model_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.parent">parent</a></code> | <code>string</code> | The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeouts">DialogflowCxGenerativeSettingsTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

Language for this settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#language_code DialogflowCxGenerativeSettings#language_code}

---

##### `fallbackSettings`<sup>Optional</sup> <a name="fallbackSettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.fallbackSettings"></a>

```typescript
public readonly fallbackSettings: DialogflowCxGenerativeSettingsFallbackSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettings">DialogflowCxGenerativeSettingsFallbackSettings</a>

fallback_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#fallback_settings DialogflowCxGenerativeSettings#fallback_settings}

---

##### `generativeSafetySettings`<sup>Optional</sup> <a name="generativeSafetySettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.generativeSafetySettings"></a>

```typescript
public readonly generativeSafetySettings: DialogflowCxGenerativeSettingsGenerativeSafetySettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettings">DialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

generative_safety_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#generative_safety_settings DialogflowCxGenerativeSettings#generative_safety_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#id DialogflowCxGenerativeSettings#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `knowledgeConnectorSettings`<sup>Optional</sup> <a name="knowledgeConnectorSettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.knowledgeConnectorSettings"></a>

```typescript
public readonly knowledgeConnectorSettings: DialogflowCxGenerativeSettingsKnowledgeConnectorSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings">DialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

knowledge_connector_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#knowledge_connector_settings DialogflowCxGenerativeSettings#knowledge_connector_settings}

---

##### `llmModelSettings`<sup>Optional</sup> <a name="llmModelSettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.llmModelSettings"></a>

```typescript
public readonly llmModelSettings: DialogflowCxGenerativeSettingsLlmModelSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettings">DialogflowCxGenerativeSettingsLlmModelSettings</a>

llm_model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#llm_model_settings DialogflowCxGenerativeSettings#llm_model_settings}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The agent to create a flow for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#parent DialogflowCxGenerativeSettings#parent}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxGenerativeSettingsTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeouts">DialogflowCxGenerativeSettingsTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#timeouts DialogflowCxGenerativeSettings#timeouts}

---

### DialogflowCxGenerativeSettingsFallbackSettings <a name="DialogflowCxGenerativeSettingsFallbackSettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettings.Initializer"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

const dialogflowCxGenerativeSettingsFallbackSettings: dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettings.property.promptTemplates">promptTemplates</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]</code> | prompt_templates block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettings.property.selectedPrompt">selectedPrompt</a></code> | <code>string</code> | Display name of the selected prompt. |

---

##### `promptTemplates`<sup>Optional</sup> <a name="promptTemplates" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettings.property.promptTemplates"></a>

```typescript
public readonly promptTemplates: IResolvable | DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]

prompt_templates block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#prompt_templates DialogflowCxGenerativeSettings#prompt_templates}

---

##### `selectedPrompt`<sup>Optional</sup> <a name="selectedPrompt" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettings.property.selectedPrompt"></a>

```typescript
public readonly selectedPrompt: string;
```

- *Type:* string

Display name of the selected prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#selected_prompt DialogflowCxGenerativeSettings#selected_prompt}

---

### DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates <a name="DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.Initializer"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

const dialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates: dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.displayName">displayName</a></code> | <code>string</code> | Prompt name. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.frozen">frozen</a></code> | <code>boolean \| cdktf.IResolvable</code> | If the flag is true, the prompt is frozen and cannot be modified by users. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.promptText">promptText</a></code> | <code>string</code> | Prompt text that is sent to a LLM on no-match default, placeholders are filled downstream. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

Prompt name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#display_name DialogflowCxGenerativeSettings#display_name}

---

##### `frozen`<sup>Optional</sup> <a name="frozen" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.frozen"></a>

```typescript
public readonly frozen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If the flag is true, the prompt is frozen and cannot be modified by users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#frozen DialogflowCxGenerativeSettings#frozen}

---

##### `promptText`<sup>Optional</sup> <a name="promptText" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates.property.promptText"></a>

```typescript
public readonly promptText: string;
```

- *Type:* string

Prompt text that is sent to a LLM on no-match default, placeholders are filled downstream.

For example: "Here is a conversation $conversation, a response is: "

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#prompt_text DialogflowCxGenerativeSettings#prompt_text}

---

### DialogflowCxGenerativeSettingsGenerativeSafetySettings <a name="DialogflowCxGenerativeSettingsGenerativeSafetySettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettings.Initializer"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

const dialogflowCxGenerativeSettingsGenerativeSafetySettings: dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettings.property.bannedPhrases">bannedPhrases</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]</code> | banned_phrases block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettings.property.defaultBannedPhraseMatchStrategy">defaultBannedPhraseMatchStrategy</a></code> | <code>string</code> | Optional. Default phrase match strategy for banned phrases. See [PhraseMatchStrategy](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/GenerativeSettings#phrasematchstrategy) for valid values. |

---

##### `bannedPhrases`<sup>Optional</sup> <a name="bannedPhrases" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettings.property.bannedPhrases"></a>

```typescript
public readonly bannedPhrases: IResolvable | DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]

banned_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#banned_phrases DialogflowCxGenerativeSettings#banned_phrases}

---

##### `defaultBannedPhraseMatchStrategy`<sup>Optional</sup> <a name="defaultBannedPhraseMatchStrategy" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettings.property.defaultBannedPhraseMatchStrategy"></a>

```typescript
public readonly defaultBannedPhraseMatchStrategy: string;
```

- *Type:* string

Optional. Default phrase match strategy for banned phrases. See [PhraseMatchStrategy](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/GenerativeSettings#phrasematchstrategy) for valid values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#default_banned_phrase_match_strategy DialogflowCxGenerativeSettings#default_banned_phrase_match_strategy}

---

### DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases <a name="DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.Initializer"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

const dialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases: dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.languageCode">languageCode</a></code> | <code>string</code> | Language code of the phrase. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.text">text</a></code> | <code>string</code> | Text input which can be used for prompt or banned phrases. |

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

Language code of the phrase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#language_code DialogflowCxGenerativeSettings#language_code}

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

Text input which can be used for prompt or banned phrases.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#text DialogflowCxGenerativeSettings#text}

---

### DialogflowCxGenerativeSettingsKnowledgeConnectorSettings <a name="DialogflowCxGenerativeSettingsKnowledgeConnectorSettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings.Initializer"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

const dialogflowCxGenerativeSettingsKnowledgeConnectorSettings: dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agent">agent</a></code> | <code>string</code> | Name of the virtual agent. Used for LLM prompt. Can be left empty. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentIdentity">agentIdentity</a></code> | <code>string</code> | Identity of the agent, e.g. "virtual agent", "AI assistant". |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentScope">agentScope</a></code> | <code>string</code> | Agent scope, e.g. "Example company website", "internal Example company website for employees", "manual of car owner". |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.business">business</a></code> | <code>string</code> | Name of the company, organization or other entity that the agent represents. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.businessDescription">businessDescription</a></code> | <code>string</code> | Company description, used for LLM prompt, e.g. "a family company selling freshly roasted coffee beans".''. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.disableDataStoreFallback">disableDataStoreFallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to disable fallback to Data Store search results (in case the LLM couldn't pick a proper answer). |

---

##### `agent`<sup>Optional</sup> <a name="agent" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agent"></a>

```typescript
public readonly agent: string;
```

- *Type:* string

Name of the virtual agent. Used for LLM prompt. Can be left empty.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#agent DialogflowCxGenerativeSettings#agent}

---

##### `agentIdentity`<sup>Optional</sup> <a name="agentIdentity" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentIdentity"></a>

```typescript
public readonly agentIdentity: string;
```

- *Type:* string

Identity of the agent, e.g. "virtual agent", "AI assistant".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#agent_identity DialogflowCxGenerativeSettings#agent_identity}

---

##### `agentScope`<sup>Optional</sup> <a name="agentScope" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.agentScope"></a>

```typescript
public readonly agentScope: string;
```

- *Type:* string

Agent scope, e.g. "Example company website", "internal Example company website for employees", "manual of car owner".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#agent_scope DialogflowCxGenerativeSettings#agent_scope}

---

##### `business`<sup>Optional</sup> <a name="business" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.business"></a>

```typescript
public readonly business: string;
```

- *Type:* string

Name of the company, organization or other entity that the agent represents.

Used for knowledge connector LLM prompt and for knowledge search.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#business DialogflowCxGenerativeSettings#business}

---

##### `businessDescription`<sup>Optional</sup> <a name="businessDescription" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.businessDescription"></a>

```typescript
public readonly businessDescription: string;
```

- *Type:* string

Company description, used for LLM prompt, e.g. "a family company selling freshly roasted coffee beans".''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#business_description DialogflowCxGenerativeSettings#business_description}

---

##### `disableDataStoreFallback`<sup>Optional</sup> <a name="disableDataStoreFallback" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings.property.disableDataStoreFallback"></a>

```typescript
public readonly disableDataStoreFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to disable fallback to Data Store search results (in case the LLM couldn't pick a proper answer).

Per default the feature is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#disable_data_store_fallback DialogflowCxGenerativeSettings#disable_data_store_fallback}

---

### DialogflowCxGenerativeSettingsLlmModelSettings <a name="DialogflowCxGenerativeSettingsLlmModelSettings" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettings.Initializer"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

const dialogflowCxGenerativeSettingsLlmModelSettings: dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettings.property.model">model</a></code> | <code>string</code> | The selected LLM model. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettings.property.promptText">promptText</a></code> | <code>string</code> | The custom prompt to use. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettings.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

The selected LLM model.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#model DialogflowCxGenerativeSettings#model}

---

##### `promptText`<sup>Optional</sup> <a name="promptText" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettings.property.promptText"></a>

```typescript
public readonly promptText: string;
```

- *Type:* string

The custom prompt to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#prompt_text DialogflowCxGenerativeSettings#prompt_text}

---

### DialogflowCxGenerativeSettingsTimeouts <a name="DialogflowCxGenerativeSettingsTimeouts" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeouts.Initializer"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

const dialogflowCxGenerativeSettingsTimeouts: dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#create DialogflowCxGenerativeSettings#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#delete DialogflowCxGenerativeSettings#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#update DialogflowCxGenerativeSettings#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#create DialogflowCxGenerativeSettings#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#delete DialogflowCxGenerativeSettings#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/6.49.1/docs/resources/dialogflow_cx_generative_settings#update DialogflowCxGenerativeSettings#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxGenerativeSettingsFallbackSettingsOutputReference <a name="DialogflowCxGenerativeSettingsFallbackSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

new dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.putPromptTemplates">putPromptTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetPromptTemplates">resetPromptTemplates</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetSelectedPrompt">resetSelectedPrompt</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPromptTemplates` <a name="putPromptTemplates" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.putPromptTemplates"></a>

```typescript
public putPromptTemplates(value: IResolvable | DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.putPromptTemplates.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]

---

##### `resetPromptTemplates` <a name="resetPromptTemplates" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetPromptTemplates"></a>

```typescript
public resetPromptTemplates(): void
```

##### `resetSelectedPrompt` <a name="resetSelectedPrompt" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.resetSelectedPrompt"></a>

```typescript
public resetSelectedPrompt(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplates">promptTemplates</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList">DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplatesInput">promptTemplatesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPromptInput">selectedPromptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPrompt">selectedPrompt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettings">DialogflowCxGenerativeSettingsFallbackSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `promptTemplates`<sup>Required</sup> <a name="promptTemplates" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplates"></a>

```typescript
public readonly promptTemplates: DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList">DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList</a>

---

##### `promptTemplatesInput`<sup>Optional</sup> <a name="promptTemplatesInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.promptTemplatesInput"></a>

```typescript
public readonly promptTemplatesInput: IResolvable | DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]

---

##### `selectedPromptInput`<sup>Optional</sup> <a name="selectedPromptInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPromptInput"></a>

```typescript
public readonly selectedPromptInput: string;
```

- *Type:* string

---

##### `selectedPrompt`<sup>Required</sup> <a name="selectedPrompt" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.selectedPrompt"></a>

```typescript
public readonly selectedPrompt: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxGenerativeSettingsFallbackSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettings">DialogflowCxGenerativeSettingsFallbackSettings</a>

---


### DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList <a name="DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

new dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.get"></a>

```typescript
public get(index: number): DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>[]

---


### DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference <a name="DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

new dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetFrozen">resetFrozen</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetPromptText">resetPromptText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetFrozen` <a name="resetFrozen" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetFrozen"></a>

```typescript
public resetFrozen(): void
```

##### `resetPromptText` <a name="resetPromptText" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.resetPromptText"></a>

```typescript
public resetPromptText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozenInput">frozenInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptTextInput">promptTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozen">frozen</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptText">promptText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `frozenInput`<sup>Optional</sup> <a name="frozenInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozenInput"></a>

```typescript
public readonly frozenInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `promptTextInput`<sup>Optional</sup> <a name="promptTextInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptTextInput"></a>

```typescript
public readonly promptTextInput: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `frozen`<sup>Required</sup> <a name="frozen" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.frozen"></a>

```typescript
public readonly frozen: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.promptText"></a>

```typescript
public readonly promptText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplatesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates">DialogflowCxGenerativeSettingsFallbackSettingsPromptTemplates</a>

---


### DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList <a name="DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

new dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.get"></a>

```typescript
public get(index: number): DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]

---


### DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference <a name="DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

new dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>

---


### DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference <a name="DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

new dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.putBannedPhrases">putBannedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetBannedPhrases">resetBannedPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetDefaultBannedPhraseMatchStrategy">resetDefaultBannedPhraseMatchStrategy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBannedPhrases` <a name="putBannedPhrases" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.putBannedPhrases"></a>

```typescript
public putBannedPhrases(value: IResolvable | DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.putBannedPhrases.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]

---

##### `resetBannedPhrases` <a name="resetBannedPhrases" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetBannedPhrases"></a>

```typescript
public resetBannedPhrases(): void
```

##### `resetDefaultBannedPhraseMatchStrategy` <a name="resetDefaultBannedPhraseMatchStrategy" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.resetDefaultBannedPhraseMatchStrategy"></a>

```typescript
public resetDefaultBannedPhraseMatchStrategy(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrases">bannedPhrases</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList">DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrasesInput">bannedPhrasesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategyInput">defaultBannedPhraseMatchStrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategy">defaultBannedPhraseMatchStrategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettings">DialogflowCxGenerativeSettingsGenerativeSafetySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `bannedPhrases`<sup>Required</sup> <a name="bannedPhrases" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrases"></a>

```typescript
public readonly bannedPhrases: DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList">DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrasesList</a>

---

##### `bannedPhrasesInput`<sup>Optional</sup> <a name="bannedPhrasesInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.bannedPhrasesInput"></a>

```typescript
public readonly bannedPhrasesInput: IResolvable | DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases">DialogflowCxGenerativeSettingsGenerativeSafetySettingsBannedPhrases</a>[]

---

##### `defaultBannedPhraseMatchStrategyInput`<sup>Optional</sup> <a name="defaultBannedPhraseMatchStrategyInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategyInput"></a>

```typescript
public readonly defaultBannedPhraseMatchStrategyInput: string;
```

- *Type:* string

---

##### `defaultBannedPhraseMatchStrategy`<sup>Required</sup> <a name="defaultBannedPhraseMatchStrategy" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.defaultBannedPhraseMatchStrategy"></a>

```typescript
public readonly defaultBannedPhraseMatchStrategy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxGenerativeSettingsGenerativeSafetySettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsGenerativeSafetySettings">DialogflowCxGenerativeSettingsGenerativeSafetySettings</a>

---


### DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference <a name="DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

new dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgent">resetAgent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentIdentity">resetAgentIdentity</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentScope">resetAgentScope</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusiness">resetBusiness</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusinessDescription">resetBusinessDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetDisableDataStoreFallback">resetDisableDataStoreFallback</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAgent` <a name="resetAgent" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgent"></a>

```typescript
public resetAgent(): void
```

##### `resetAgentIdentity` <a name="resetAgentIdentity" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentIdentity"></a>

```typescript
public resetAgentIdentity(): void
```

##### `resetAgentScope` <a name="resetAgentScope" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetAgentScope"></a>

```typescript
public resetAgentScope(): void
```

##### `resetBusiness` <a name="resetBusiness" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusiness"></a>

```typescript
public resetBusiness(): void
```

##### `resetBusinessDescription` <a name="resetBusinessDescription" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetBusinessDescription"></a>

```typescript
public resetBusinessDescription(): void
```

##### `resetDisableDataStoreFallback` <a name="resetDisableDataStoreFallback" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.resetDisableDataStoreFallback"></a>

```typescript
public resetDisableDataStoreFallback(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentityInput">agentIdentityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentInput">agentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScopeInput">agentScopeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescriptionInput">businessDescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessInput">businessInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallbackInput">disableDataStoreFallbackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agent">agent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentity">agentIdentity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScope">agentScope</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.business">business</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescription">businessDescription</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallback">disableDataStoreFallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings">DialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `agentIdentityInput`<sup>Optional</sup> <a name="agentIdentityInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentityInput"></a>

```typescript
public readonly agentIdentityInput: string;
```

- *Type:* string

---

##### `agentInput`<sup>Optional</sup> <a name="agentInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentInput"></a>

```typescript
public readonly agentInput: string;
```

- *Type:* string

---

##### `agentScopeInput`<sup>Optional</sup> <a name="agentScopeInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScopeInput"></a>

```typescript
public readonly agentScopeInput: string;
```

- *Type:* string

---

##### `businessDescriptionInput`<sup>Optional</sup> <a name="businessDescriptionInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescriptionInput"></a>

```typescript
public readonly businessDescriptionInput: string;
```

- *Type:* string

---

##### `businessInput`<sup>Optional</sup> <a name="businessInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessInput"></a>

```typescript
public readonly businessInput: string;
```

- *Type:* string

---

##### `disableDataStoreFallbackInput`<sup>Optional</sup> <a name="disableDataStoreFallbackInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallbackInput"></a>

```typescript
public readonly disableDataStoreFallbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agent"></a>

```typescript
public readonly agent: string;
```

- *Type:* string

---

##### `agentIdentity`<sup>Required</sup> <a name="agentIdentity" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentIdentity"></a>

```typescript
public readonly agentIdentity: string;
```

- *Type:* string

---

##### `agentScope`<sup>Required</sup> <a name="agentScope" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.agentScope"></a>

```typescript
public readonly agentScope: string;
```

- *Type:* string

---

##### `business`<sup>Required</sup> <a name="business" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.business"></a>

```typescript
public readonly business: string;
```

- *Type:* string

---

##### `businessDescription`<sup>Required</sup> <a name="businessDescription" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.businessDescription"></a>

```typescript
public readonly businessDescription: string;
```

- *Type:* string

---

##### `disableDataStoreFallback`<sup>Required</sup> <a name="disableDataStoreFallback" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.disableDataStoreFallback"></a>

```typescript
public readonly disableDataStoreFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxGenerativeSettingsKnowledgeConnectorSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsKnowledgeConnectorSettings">DialogflowCxGenerativeSettingsKnowledgeConnectorSettings</a>

---


### DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference <a name="DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

new dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetPromptText">resetPromptText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetModel"></a>

```typescript
public resetModel(): void
```

##### `resetPromptText` <a name="resetPromptText" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.resetPromptText"></a>

```typescript
public resetPromptText(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptTextInput">promptTextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.model">model</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptText">promptText</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettings">DialogflowCxGenerativeSettingsLlmModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.modelInput"></a>

```typescript
public readonly modelInput: string;
```

- *Type:* string

---

##### `promptTextInput`<sup>Optional</sup> <a name="promptTextInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptTextInput"></a>

```typescript
public readonly promptTextInput: string;
```

- *Type:* string

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.model"></a>

```typescript
public readonly model: string;
```

- *Type:* string

---

##### `promptText`<sup>Required</sup> <a name="promptText" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.promptText"></a>

```typescript
public readonly promptText: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxGenerativeSettingsLlmModelSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsLlmModelSettings">DialogflowCxGenerativeSettingsLlmModelSettings</a>

---


### DialogflowCxGenerativeSettingsTimeoutsOutputReference <a name="DialogflowCxGenerativeSettingsTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxGenerativeSettings } from '@cdktf/provider-google'

new dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeouts">DialogflowCxGenerativeSettingsTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxGenerativeSettingsTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxGenerativeSettings.DialogflowCxGenerativeSettingsTimeouts">DialogflowCxGenerativeSettingsTimeouts</a>

---



