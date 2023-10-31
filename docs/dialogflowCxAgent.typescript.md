# `google_dialogflow_cx_agent`

Refer to the Terraform Registory for docs: [`google_dialogflow_cx_agent`](https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent).

# `dialogflowCxAgent` Submodule <a name="`dialogflowCxAgent` Submodule" id="@cdktf/provider-google.dialogflowCxAgent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxAgent <a name="DialogflowCxAgent" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent google_dialogflow_cx_agent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

new dialogflowCxAgent.DialogflowCxAgent(scope: Construct, id: string, config: DialogflowCxAgentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig">DialogflowCxAgentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig">DialogflowCxAgentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putAdvancedSettings">putAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putGitIntegrationSettings">putGitIntegrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putSpeechToTextSettings">putSpeechToTextSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTextToSpeechSettings">putTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetAdvancedSettings">resetAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetAvatarUri">resetAvatarUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetEnableSpellCorrection">resetEnableSpellCorrection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetEnableStackdriverLogging">resetEnableStackdriverLogging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetGitIntegrationSettings">resetGitIntegrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetSecuritySettings">resetSecuritySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetSpeechToTextSettings">resetSpeechToTextSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetSupportedLanguageCodes">resetSupportedLanguageCodes</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetTextToSpeechSettings">resetTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addMoveTarget"></a>

```typescript
public addMoveTarget(moveTarget: string): void
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.importFrom"></a>

```typescript
public importFrom(id: string, provider?: TerraformProvider): void
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.importFrom.parameter.id"></a>

- *Type:* string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveTo"></a>

```typescript
public moveTo(moveTarget: string, index?: string | number): void
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.moveTo.parameter.index"></a>

- *Type:* string | number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putAdvancedSettings` <a name="putAdvancedSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putAdvancedSettings"></a>

```typescript
public putAdvancedSettings(value: DialogflowCxAgentAdvancedSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putAdvancedSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a>

---

##### `putGitIntegrationSettings` <a name="putGitIntegrationSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putGitIntegrationSettings"></a>

```typescript
public putGitIntegrationSettings(value: DialogflowCxAgentGitIntegrationSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putGitIntegrationSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a>

---

##### `putSpeechToTextSettings` <a name="putSpeechToTextSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putSpeechToTextSettings"></a>

```typescript
public putSpeechToTextSettings(value: DialogflowCxAgentSpeechToTextSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putSpeechToTextSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a>

---

##### `putTextToSpeechSettings` <a name="putTextToSpeechSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTextToSpeechSettings"></a>

```typescript
public putTextToSpeechSettings(value: DialogflowCxAgentTextToSpeechSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTextToSpeechSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTimeouts"></a>

```typescript
public putTimeouts(value: DialogflowCxAgentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts">DialogflowCxAgentTimeouts</a>

---

##### `resetAdvancedSettings` <a name="resetAdvancedSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetAdvancedSettings"></a>

```typescript
public resetAdvancedSettings(): void
```

##### `resetAvatarUri` <a name="resetAvatarUri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetAvatarUri"></a>

```typescript
public resetAvatarUri(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetEnableSpellCorrection` <a name="resetEnableSpellCorrection" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetEnableSpellCorrection"></a>

```typescript
public resetEnableSpellCorrection(): void
```

##### `resetEnableStackdriverLogging` <a name="resetEnableStackdriverLogging" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetEnableStackdriverLogging"></a>

```typescript
public resetEnableStackdriverLogging(): void
```

##### `resetGitIntegrationSettings` <a name="resetGitIntegrationSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetGitIntegrationSettings"></a>

```typescript
public resetGitIntegrationSettings(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetSecuritySettings` <a name="resetSecuritySettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetSecuritySettings"></a>

```typescript
public resetSecuritySettings(): void
```

##### `resetSpeechToTextSettings` <a name="resetSpeechToTextSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetSpeechToTextSettings"></a>

```typescript
public resetSpeechToTextSettings(): void
```

##### `resetSupportedLanguageCodes` <a name="resetSupportedLanguageCodes" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetSupportedLanguageCodes"></a>

```typescript
public resetSupportedLanguageCodes(): void
```

##### `resetTextToSpeechSettings` <a name="resetTextToSpeechSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetTextToSpeechSettings"></a>

```typescript
public resetTextToSpeechSettings(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DialogflowCxAgent resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isConstruct"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

dialogflowCxAgent.DialogflowCxAgent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isTerraformElement"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

dialogflowCxAgent.DialogflowCxAgent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isTerraformResource"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

dialogflowCxAgent.DialogflowCxAgent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.generateConfigForImport"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

dialogflowCxAgent.DialogflowCxAgent.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DialogflowCxAgent resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DialogflowCxAgent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DialogflowCxAgent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DialogflowCxAgent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.advancedSettings">advancedSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference">DialogflowCxAgentAdvancedSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.gitIntegrationSettings">gitIntegrationSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference">DialogflowCxAgentGitIntegrationSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.speechToTextSettings">speechToTextSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference">DialogflowCxAgentSpeechToTextSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.startFlow">startFlow</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.textToSpeechSettings">textToSpeechSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference">DialogflowCxAgentTextToSpeechSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference">DialogflowCxAgentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.advancedSettingsInput">advancedSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.avatarUriInput">avatarUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.defaultLanguageCodeInput">defaultLanguageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableSpellCorrectionInput">enableSpellCorrectionInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableStackdriverLoggingInput">enableStackdriverLoggingInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.gitIntegrationSettingsInput">gitIntegrationSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.locationInput">locationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.securitySettingsInput">securitySettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.speechToTextSettingsInput">speechToTextSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.supportedLanguageCodesInput">supportedLanguageCodesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.textToSpeechSettingsInput">textToSpeechSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts">DialogflowCxAgentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeZoneInput">timeZoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.avatarUri">avatarUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.defaultLanguageCode">defaultLanguageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableSpellCorrection">enableSpellCorrection</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableStackdriverLogging">enableStackdriverLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.location">location</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.securitySettings">securitySettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.supportedLanguageCodes">supportedLanguageCodes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeZone">timeZone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `advancedSettings`<sup>Required</sup> <a name="advancedSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.advancedSettings"></a>

```typescript
public readonly advancedSettings: DialogflowCxAgentAdvancedSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference">DialogflowCxAgentAdvancedSettingsOutputReference</a>

---

##### `gitIntegrationSettings`<sup>Required</sup> <a name="gitIntegrationSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.gitIntegrationSettings"></a>

```typescript
public readonly gitIntegrationSettings: DialogflowCxAgentGitIntegrationSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference">DialogflowCxAgentGitIntegrationSettingsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `speechToTextSettings`<sup>Required</sup> <a name="speechToTextSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.speechToTextSettings"></a>

```typescript
public readonly speechToTextSettings: DialogflowCxAgentSpeechToTextSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference">DialogflowCxAgentSpeechToTextSettingsOutputReference</a>

---

##### `startFlow`<sup>Required</sup> <a name="startFlow" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.startFlow"></a>

```typescript
public readonly startFlow: string;
```

- *Type:* string

---

##### `textToSpeechSettings`<sup>Required</sup> <a name="textToSpeechSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.textToSpeechSettings"></a>

```typescript
public readonly textToSpeechSettings: DialogflowCxAgentTextToSpeechSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference">DialogflowCxAgentTextToSpeechSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxAgentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference">DialogflowCxAgentTimeoutsOutputReference</a>

---

##### `advancedSettingsInput`<sup>Optional</sup> <a name="advancedSettingsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.advancedSettingsInput"></a>

```typescript
public readonly advancedSettingsInput: DialogflowCxAgentAdvancedSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a>

---

##### `avatarUriInput`<sup>Optional</sup> <a name="avatarUriInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.avatarUriInput"></a>

```typescript
public readonly avatarUriInput: string;
```

- *Type:* string

---

##### `defaultLanguageCodeInput`<sup>Optional</sup> <a name="defaultLanguageCodeInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.defaultLanguageCodeInput"></a>

```typescript
public readonly defaultLanguageCodeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `enableSpellCorrectionInput`<sup>Optional</sup> <a name="enableSpellCorrectionInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableSpellCorrectionInput"></a>

```typescript
public readonly enableSpellCorrectionInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStackdriverLoggingInput`<sup>Optional</sup> <a name="enableStackdriverLoggingInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableStackdriverLoggingInput"></a>

```typescript
public readonly enableStackdriverLoggingInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `gitIntegrationSettingsInput`<sup>Optional</sup> <a name="gitIntegrationSettingsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.gitIntegrationSettingsInput"></a>

```typescript
public readonly gitIntegrationSettingsInput: DialogflowCxAgentGitIntegrationSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.locationInput"></a>

```typescript
public readonly locationInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `securitySettingsInput`<sup>Optional</sup> <a name="securitySettingsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.securitySettingsInput"></a>

```typescript
public readonly securitySettingsInput: string;
```

- *Type:* string

---

##### `speechToTextSettingsInput`<sup>Optional</sup> <a name="speechToTextSettingsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.speechToTextSettingsInput"></a>

```typescript
public readonly speechToTextSettingsInput: DialogflowCxAgentSpeechToTextSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a>

---

##### `supportedLanguageCodesInput`<sup>Optional</sup> <a name="supportedLanguageCodesInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.supportedLanguageCodesInput"></a>

```typescript
public readonly supportedLanguageCodesInput: string[];
```

- *Type:* string[]

---

##### `textToSpeechSettingsInput`<sup>Optional</sup> <a name="textToSpeechSettingsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.textToSpeechSettingsInput"></a>

```typescript
public readonly textToSpeechSettingsInput: DialogflowCxAgentTextToSpeechSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DialogflowCxAgentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts">DialogflowCxAgentTimeouts</a>

---

##### `timeZoneInput`<sup>Optional</sup> <a name="timeZoneInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeZoneInput"></a>

```typescript
public readonly timeZoneInput: string;
```

- *Type:* string

---

##### `avatarUri`<sup>Required</sup> <a name="avatarUri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.avatarUri"></a>

```typescript
public readonly avatarUri: string;
```

- *Type:* string

---

##### `defaultLanguageCode`<sup>Required</sup> <a name="defaultLanguageCode" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.defaultLanguageCode"></a>

```typescript
public readonly defaultLanguageCode: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `enableSpellCorrection`<sup>Required</sup> <a name="enableSpellCorrection" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableSpellCorrection"></a>

```typescript
public readonly enableSpellCorrection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableStackdriverLogging`<sup>Required</sup> <a name="enableStackdriverLogging" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.enableStackdriverLogging"></a>

```typescript
public readonly enableStackdriverLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `securitySettings`<sup>Required</sup> <a name="securitySettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.securitySettings"></a>

```typescript
public readonly securitySettings: string;
```

- *Type:* string

---

##### `supportedLanguageCodes`<sup>Required</sup> <a name="supportedLanguageCodes" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.supportedLanguageCodes"></a>

```typescript
public readonly supportedLanguageCodes: string[];
```

- *Type:* string[]

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxAgentAdvancedSettings <a name="DialogflowCxAgentAdvancedSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings.Initializer"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

const dialogflowCxAgentAdvancedSettings: dialogflowCxAgent.DialogflowCxAgentAdvancedSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings.property.audioExportGcsDestination">audioExportGcsDestination</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a></code> | audio_export_gcs_destination block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings.property.dtmfSettings">dtmfSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a></code> | dtmf_settings block. |

---

##### `audioExportGcsDestination`<sup>Optional</sup> <a name="audioExportGcsDestination" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings.property.audioExportGcsDestination"></a>

```typescript
public readonly audioExportGcsDestination: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

audio_export_gcs_destination block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#audio_export_gcs_destination DialogflowCxAgent#audio_export_gcs_destination}

---

##### `dtmfSettings`<sup>Optional</sup> <a name="dtmfSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings.property.dtmfSettings"></a>

```typescript
public readonly dtmfSettings: DialogflowCxAgentAdvancedSettingsDtmfSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a>

dtmf_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#dtmf_settings DialogflowCxAgent#dtmf_settings}

---

### DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination <a name="DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination.Initializer"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

const dialogflowCxAgentAdvancedSettingsAudioExportGcsDestination: dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination.property.uri">uri</a></code> | <code>string</code> | The Google Cloud Storage URI for the exported objects. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

The Google Cloud Storage URI for the exported objects.

Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation.
Format: gs://bucket/object-name-or-prefix

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#uri DialogflowCxAgent#uri}

---

### DialogflowCxAgentAdvancedSettingsDtmfSettings <a name="DialogflowCxAgentAdvancedSettingsDtmfSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.Initializer"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

const dialogflowCxAgentAdvancedSettingsDtmfSettings: dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | If true, incoming audio is processed for DTMF (dual tone multi frequency) events. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.property.finishDigit">finishDigit</a></code> | <code>string</code> | The digit that terminates a DTMF digit sequence. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.property.maxDigits">maxDigits</a></code> | <code>number</code> | Max length of DTMF digits. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

If true, incoming audio is processed for DTMF (dual tone multi frequency) events.

For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#enabled DialogflowCxAgent#enabled}

---

##### `finishDigit`<sup>Optional</sup> <a name="finishDigit" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.property.finishDigit"></a>

```typescript
public readonly finishDigit: string;
```

- *Type:* string

The digit that terminates a DTMF digit sequence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#finish_digit DialogflowCxAgent#finish_digit}

---

##### `maxDigits`<sup>Optional</sup> <a name="maxDigits" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings.property.maxDigits"></a>

```typescript
public readonly maxDigits: number;
```

- *Type:* number

Max length of DTMF digits.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#max_digits DialogflowCxAgent#max_digits}

---

### DialogflowCxAgentConfig <a name="DialogflowCxAgentConfig" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.Initializer"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

const dialogflowCxAgentConfig: dialogflowCxAgent.DialogflowCxAgentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.defaultLanguageCode">defaultLanguageCode</a></code> | <code>string</code> | The default language of the agent as a language tag. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name of the agent, unique within the location. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.location">location</a></code> | <code>string</code> | The name of the location this agent is located in. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.timeZone">timeZone</a></code> | <code>string</code> | The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.advancedSettings">advancedSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a></code> | advanced_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.avatarUri">avatarUri</a></code> | <code>string</code> | The URI of the agent's avatar. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.description">description</a></code> | <code>string</code> | The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.enableSpellCorrection">enableSpellCorrection</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates if automatic spell correction is enabled in detect intent requests. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.enableStackdriverLogging">enableStackdriverLogging</a></code> | <code>boolean \| cdktf.IResolvable</code> | Determines whether this agent should log conversation queries. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.gitIntegrationSettings">gitIntegrationSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a></code> | git_integration_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#id DialogflowCxAgent#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#project DialogflowCxAgent#project}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.securitySettings">securitySettings</a></code> | <code>string</code> | Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.speechToTextSettings">speechToTextSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a></code> | speech_to_text_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.supportedLanguageCodes">supportedLanguageCodes</a></code> | <code>string[]</code> | The list of all languages supported by this agent (except for the default_language_code). |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.textToSpeechSettings">textToSpeechSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a></code> | text_to_speech_settings block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts">DialogflowCxAgentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `defaultLanguageCode`<sup>Required</sup> <a name="defaultLanguageCode" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.defaultLanguageCode"></a>

```typescript
public readonly defaultLanguageCode: string;
```

- *Type:* string

The default language of the agent as a language tag.

[See Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language)
for a list of the currently supported language codes. This field cannot be updated after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#default_language_code DialogflowCxAgent#default_language_code}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name of the agent, unique within the location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#display_name DialogflowCxAgent#display_name}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.location"></a>

```typescript
public readonly location: string;
```

- *Type:* string

The name of the location this agent is located in.

~> **Note:** The first time you are deploying an Agent in your project you must configure location settings.
 This is a one time step but at the moment you can only [configure location settings](https://cloud.google.com/dialogflow/cx/docs/concept/region#location-settings) via the Dialogflow CX console.
 Another options is to use global location so you don't need to manually configure location settings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#location DialogflowCxAgent#location}

---

##### `timeZone`<sup>Required</sup> <a name="timeZone" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.timeZone"></a>

```typescript
public readonly timeZone: string;
```

- *Type:* string

The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York, Europe/Paris.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#time_zone DialogflowCxAgent#time_zone}

---

##### `advancedSettings`<sup>Optional</sup> <a name="advancedSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.advancedSettings"></a>

```typescript
public readonly advancedSettings: DialogflowCxAgentAdvancedSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a>

advanced_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#advanced_settings DialogflowCxAgent#advanced_settings}

---

##### `avatarUri`<sup>Optional</sup> <a name="avatarUri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.avatarUri"></a>

```typescript
public readonly avatarUri: string;
```

- *Type:* string

The URI of the agent's avatar.

Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#avatar_uri DialogflowCxAgent#avatar_uri}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#description DialogflowCxAgent#description}

---

##### `enableSpellCorrection`<sup>Optional</sup> <a name="enableSpellCorrection" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.enableSpellCorrection"></a>

```typescript
public readonly enableSpellCorrection: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates if automatic spell correction is enabled in detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#enable_spell_correction DialogflowCxAgent#enable_spell_correction}

---

##### `enableStackdriverLogging`<sup>Optional</sup> <a name="enableStackdriverLogging" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.enableStackdriverLogging"></a>

```typescript
public readonly enableStackdriverLogging: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Determines whether this agent should log conversation queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#enable_stackdriver_logging DialogflowCxAgent#enable_stackdriver_logging}

---

##### `gitIntegrationSettings`<sup>Optional</sup> <a name="gitIntegrationSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.gitIntegrationSettings"></a>

```typescript
public readonly gitIntegrationSettings: DialogflowCxAgentGitIntegrationSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a>

git_integration_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#git_integration_settings DialogflowCxAgent#git_integration_settings}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#id DialogflowCxAgent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#project DialogflowCxAgent#project}.

---

##### `securitySettings`<sup>Optional</sup> <a name="securitySettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.securitySettings"></a>

```typescript
public readonly securitySettings: string;
```

- *Type:* string

Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#security_settings DialogflowCxAgent#security_settings}

---

##### `speechToTextSettings`<sup>Optional</sup> <a name="speechToTextSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.speechToTextSettings"></a>

```typescript
public readonly speechToTextSettings: DialogflowCxAgentSpeechToTextSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a>

speech_to_text_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#speech_to_text_settings DialogflowCxAgent#speech_to_text_settings}

---

##### `supportedLanguageCodes`<sup>Optional</sup> <a name="supportedLanguageCodes" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.supportedLanguageCodes"></a>

```typescript
public readonly supportedLanguageCodes: string[];
```

- *Type:* string[]

The list of all languages supported by this agent (except for the default_language_code).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#supported_language_codes DialogflowCxAgent#supported_language_codes}

---

##### `textToSpeechSettings`<sup>Optional</sup> <a name="textToSpeechSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.textToSpeechSettings"></a>

```typescript
public readonly textToSpeechSettings: DialogflowCxAgentTextToSpeechSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a>

text_to_speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#text_to_speech_settings DialogflowCxAgent#text_to_speech_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxAgentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts">DialogflowCxAgentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#timeouts DialogflowCxAgent#timeouts}

---

### DialogflowCxAgentGitIntegrationSettings <a name="DialogflowCxAgentGitIntegrationSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings.Initializer"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

const dialogflowCxAgentGitIntegrationSettings: dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings.property.githubSettings">githubSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a></code> | github_settings block. |

---

##### `githubSettings`<sup>Optional</sup> <a name="githubSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings.property.githubSettings"></a>

```typescript
public readonly githubSettings: DialogflowCxAgentGitIntegrationSettingsGithubSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

github_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#github_settings DialogflowCxAgent#github_settings}

---

### DialogflowCxAgentGitIntegrationSettingsGithubSettings <a name="DialogflowCxAgentGitIntegrationSettingsGithubSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.Initializer"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

const dialogflowCxAgentGitIntegrationSettingsGithubSettings: dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.accessToken">accessToken</a></code> | <code>string</code> | The access token used to authenticate the access to the GitHub repository. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.branches">branches</a></code> | <code>string[]</code> | A list of branches configured to be used from Dialogflow. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.displayName">displayName</a></code> | <code>string</code> | The unique repository display name for the GitHub repository. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.repositoryUri">repositoryUri</a></code> | <code>string</code> | The GitHub repository URI related to the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.trackingBranch">trackingBranch</a></code> | <code>string</code> | The branch of the GitHub repository tracked for this agent. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

The access token used to authenticate the access to the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#access_token DialogflowCxAgent#access_token}

---

##### `branches`<sup>Optional</sup> <a name="branches" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.branches"></a>

```typescript
public readonly branches: string[];
```

- *Type:* string[]

A list of branches configured to be used from Dialogflow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#branches DialogflowCxAgent#branches}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The unique repository display name for the GitHub repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#display_name DialogflowCxAgent#display_name}

---

##### `repositoryUri`<sup>Optional</sup> <a name="repositoryUri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.repositoryUri"></a>

```typescript
public readonly repositoryUri: string;
```

- *Type:* string

The GitHub repository URI related to the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#repository_uri DialogflowCxAgent#repository_uri}

---

##### `trackingBranch`<sup>Optional</sup> <a name="trackingBranch" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings.property.trackingBranch"></a>

```typescript
public readonly trackingBranch: string;
```

- *Type:* string

The branch of the GitHub repository tracked for this agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#tracking_branch DialogflowCxAgent#tracking_branch}

---

### DialogflowCxAgentSpeechToTextSettings <a name="DialogflowCxAgentSpeechToTextSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings.Initializer"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

const dialogflowCxAgentSpeechToTextSettings: dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings.property.enableSpeechAdaptation">enableSpeechAdaptation</a></code> | <code>boolean \| cdktf.IResolvable</code> | Whether to use speech adaptation for speech recognition. |

---

##### `enableSpeechAdaptation`<sup>Optional</sup> <a name="enableSpeechAdaptation" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings.property.enableSpeechAdaptation"></a>

```typescript
public readonly enableSpeechAdaptation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Whether to use speech adaptation for speech recognition.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#enable_speech_adaptation DialogflowCxAgent#enable_speech_adaptation}

---

### DialogflowCxAgentTextToSpeechSettings <a name="DialogflowCxAgentTextToSpeechSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings.Initializer"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

const dialogflowCxAgentTextToSpeechSettings: dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings.property.synthesizeSpeechConfigs">synthesizeSpeechConfigs</a></code> | <code>string</code> | Configuration of how speech should be synthesized, mapping from [language](https://cloud.google.com/dialogflow/cx/docs/reference/language) to [SynthesizeSpeechConfig](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents#synthesizespeechconfig). These settings affect: * The phone gateway synthesize configuration set via Agent.text_to_speech_settings. * How speech is synthesized when invoking session APIs. 'Agent.text_to_speech_settings' only applies if 'OutputAudioConfig.synthesize_speech_config' is not specified. |

---

##### `synthesizeSpeechConfigs`<sup>Optional</sup> <a name="synthesizeSpeechConfigs" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings.property.synthesizeSpeechConfigs"></a>

```typescript
public readonly synthesizeSpeechConfigs: string;
```

- *Type:* string

Configuration of how speech should be synthesized, mapping from [language](https://cloud.google.com/dialogflow/cx/docs/reference/language) to [SynthesizeSpeechConfig](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents#synthesizespeechconfig). These settings affect: * The phone gateway synthesize configuration set via Agent.text_to_speech_settings. * How speech is synthesized when invoking session APIs. 'Agent.text_to_speech_settings' only applies if 'OutputAudioConfig.synthesize_speech_config' is not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#synthesize_speech_configs DialogflowCxAgent#synthesize_speech_configs}

---

### DialogflowCxAgentTimeouts <a name="DialogflowCxAgentTimeouts" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.Initializer"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

const dialogflowCxAgentTimeouts: dialogflowCxAgent.DialogflowCxAgentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#create DialogflowCxAgent#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#delete DialogflowCxAgent#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#update DialogflowCxAgent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#create DialogflowCxAgent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#delete DialogflowCxAgent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/5.4.0/docs/resources/dialogflow_cx_agent#update DialogflowCxAgent#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference <a name="DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

new dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUri` <a name="resetUri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.resetUri"></a>

```typescript
public resetUri(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uriInput">uriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uri">uri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uriInput"></a>

```typescript
public readonly uriInput: string;
```

- *Type:* string

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.uri"></a>

```typescript
public readonly uri: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

---


### DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference <a name="DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

new dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetFinishDigit">resetFinishDigit</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetMaxDigits">resetMaxDigits</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetEnabled"></a>

```typescript
public resetEnabled(): void
```

##### `resetFinishDigit` <a name="resetFinishDigit" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetFinishDigit"></a>

```typescript
public resetFinishDigit(): void
```

##### `resetMaxDigits` <a name="resetMaxDigits" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.resetMaxDigits"></a>

```typescript
public resetMaxDigits(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabledInput">enabledInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigitInput">finishDigitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigitsInput">maxDigitsInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabled">enabled</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigit">finishDigit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigits">maxDigits</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabledInput"></a>

```typescript
public readonly enabledInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `finishDigitInput`<sup>Optional</sup> <a name="finishDigitInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigitInput"></a>

```typescript
public readonly finishDigitInput: string;
```

- *Type:* string

---

##### `maxDigitsInput`<sup>Optional</sup> <a name="maxDigitsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigitsInput"></a>

```typescript
public readonly maxDigitsInput: number;
```

- *Type:* number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.enabled"></a>

```typescript
public readonly enabled: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `finishDigit`<sup>Required</sup> <a name="finishDigit" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.finishDigit"></a>

```typescript
public readonly finishDigit: string;
```

- *Type:* string

---

##### `maxDigits`<sup>Required</sup> <a name="maxDigits" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.maxDigits"></a>

```typescript
public readonly maxDigits: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxAgentAdvancedSettingsDtmfSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a>

---


### DialogflowCxAgentAdvancedSettingsOutputReference <a name="DialogflowCxAgentAdvancedSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

new dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putAudioExportGcsDestination">putAudioExportGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putDtmfSettings">putDtmfSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resetAudioExportGcsDestination">resetAudioExportGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resetDtmfSettings">resetDtmfSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAudioExportGcsDestination` <a name="putAudioExportGcsDestination" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putAudioExportGcsDestination"></a>

```typescript
public putAudioExportGcsDestination(value: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putAudioExportGcsDestination.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

---

##### `putDtmfSettings` <a name="putDtmfSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putDtmfSettings"></a>

```typescript
public putDtmfSettings(value: DialogflowCxAgentAdvancedSettingsDtmfSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.putDtmfSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a>

---

##### `resetAudioExportGcsDestination` <a name="resetAudioExportGcsDestination" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resetAudioExportGcsDestination"></a>

```typescript
public resetAudioExportGcsDestination(): void
```

##### `resetDtmfSettings` <a name="resetDtmfSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.resetDtmfSettings"></a>

```typescript
public resetDtmfSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestination">audioExportGcsDestination</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettings">dtmfSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference">DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestinationInput">audioExportGcsDestinationInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettingsInput">dtmfSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `audioExportGcsDestination`<sup>Required</sup> <a name="audioExportGcsDestination" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestination"></a>

```typescript
public readonly audioExportGcsDestination: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference</a>

---

##### `dtmfSettings`<sup>Required</sup> <a name="dtmfSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettings"></a>

```typescript
public readonly dtmfSettings: DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference">DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference</a>

---

##### `audioExportGcsDestinationInput`<sup>Optional</sup> <a name="audioExportGcsDestinationInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.audioExportGcsDestinationInput"></a>

```typescript
public readonly audioExportGcsDestinationInput: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination">DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination</a>

---

##### `dtmfSettingsInput`<sup>Optional</sup> <a name="dtmfSettingsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.dtmfSettingsInput"></a>

```typescript
public readonly dtmfSettingsInput: DialogflowCxAgentAdvancedSettingsDtmfSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsDtmfSettings">DialogflowCxAgentAdvancedSettingsDtmfSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxAgentAdvancedSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentAdvancedSettings">DialogflowCxAgentAdvancedSettings</a>

---


### DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference <a name="DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

new dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetBranches">resetBranches</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetRepositoryUri">resetRepositoryUri</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetTrackingBranch">resetTrackingBranch</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetAccessToken"></a>

```typescript
public resetAccessToken(): void
```

##### `resetBranches` <a name="resetBranches" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetBranches"></a>

```typescript
public resetBranches(): void
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetDisplayName"></a>

```typescript
public resetDisplayName(): void
```

##### `resetRepositoryUri` <a name="resetRepositoryUri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetRepositoryUri"></a>

```typescript
public resetRepositoryUri(): void
```

##### `resetTrackingBranch` <a name="resetTrackingBranch" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.resetTrackingBranch"></a>

```typescript
public resetTrackingBranch(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branchesInput">branchesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUriInput">repositoryUriInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranchInput">trackingBranchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessToken">accessToken</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branches">branches</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUri">repositoryUri</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranch">trackingBranch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessTokenInput"></a>

```typescript
public readonly accessTokenInput: string;
```

- *Type:* string

---

##### `branchesInput`<sup>Optional</sup> <a name="branchesInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branchesInput"></a>

```typescript
public readonly branchesInput: string[];
```

- *Type:* string[]

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `repositoryUriInput`<sup>Optional</sup> <a name="repositoryUriInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUriInput"></a>

```typescript
public readonly repositoryUriInput: string;
```

- *Type:* string

---

##### `trackingBranchInput`<sup>Optional</sup> <a name="trackingBranchInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranchInput"></a>

```typescript
public readonly trackingBranchInput: string;
```

- *Type:* string

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.accessToken"></a>

```typescript
public readonly accessToken: string;
```

- *Type:* string

---

##### `branches`<sup>Required</sup> <a name="branches" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.branches"></a>

```typescript
public readonly branches: string[];
```

- *Type:* string[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `repositoryUri`<sup>Required</sup> <a name="repositoryUri" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.repositoryUri"></a>

```typescript
public readonly repositoryUri: string;
```

- *Type:* string

---

##### `trackingBranch`<sup>Required</sup> <a name="trackingBranch" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.trackingBranch"></a>

```typescript
public readonly trackingBranch: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxAgentGitIntegrationSettingsGithubSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

---


### DialogflowCxAgentGitIntegrationSettingsOutputReference <a name="DialogflowCxAgentGitIntegrationSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

new dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings">putGithubSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.resetGithubSettings">resetGithubSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGithubSettings` <a name="putGithubSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings"></a>

```typescript
public putGithubSettings(value: DialogflowCxAgentGitIntegrationSettingsGithubSettings): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.putGithubSettings.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

---

##### `resetGithubSettings` <a name="resetGithubSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.resetGithubSettings"></a>

```typescript
public resetGithubSettings(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettings">githubSettings</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference">DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettingsInput">githubSettingsInput</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `githubSettings`<sup>Required</sup> <a name="githubSettings" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettings"></a>

```typescript
public readonly githubSettings: DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference">DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference</a>

---

##### `githubSettingsInput`<sup>Optional</sup> <a name="githubSettingsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.githubSettingsInput"></a>

```typescript
public readonly githubSettingsInput: DialogflowCxAgentGitIntegrationSettingsGithubSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsGithubSettings">DialogflowCxAgentGitIntegrationSettingsGithubSettings</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxAgentGitIntegrationSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentGitIntegrationSettings">DialogflowCxAgentGitIntegrationSettings</a>

---


### DialogflowCxAgentSpeechToTextSettingsOutputReference <a name="DialogflowCxAgentSpeechToTextSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

new dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.resetEnableSpeechAdaptation">resetEnableSpeechAdaptation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnableSpeechAdaptation` <a name="resetEnableSpeechAdaptation" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.resetEnableSpeechAdaptation"></a>

```typescript
public resetEnableSpeechAdaptation(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptationInput">enableSpeechAdaptationInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptation">enableSpeechAdaptation</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `enableSpeechAdaptationInput`<sup>Optional</sup> <a name="enableSpeechAdaptationInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptationInput"></a>

```typescript
public readonly enableSpeechAdaptationInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `enableSpeechAdaptation`<sup>Required</sup> <a name="enableSpeechAdaptation" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.enableSpeechAdaptation"></a>

```typescript
public readonly enableSpeechAdaptation: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxAgentSpeechToTextSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentSpeechToTextSettings">DialogflowCxAgentSpeechToTextSettings</a>

---


### DialogflowCxAgentTextToSpeechSettingsOutputReference <a name="DialogflowCxAgentTextToSpeechSettingsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

new dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs">resetSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSynthesizeSpeechConfigs` <a name="resetSynthesizeSpeechConfigs" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs"></a>

```typescript
public resetSynthesizeSpeechConfigs(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput">synthesizeSpeechConfigsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs">synthesizeSpeechConfigs</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `synthesizeSpeechConfigsInput`<sup>Optional</sup> <a name="synthesizeSpeechConfigsInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput"></a>

```typescript
public readonly synthesizeSpeechConfigsInput: string;
```

- *Type:* string

---

##### `synthesizeSpeechConfigs`<sup>Required</sup> <a name="synthesizeSpeechConfigs" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs"></a>

```typescript
public readonly synthesizeSpeechConfigs: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettingsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DialogflowCxAgentTextToSpeechSettings;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTextToSpeechSettings">DialogflowCxAgentTextToSpeechSettings</a>

---


### DialogflowCxAgentTimeoutsOutputReference <a name="DialogflowCxAgentTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxAgent } from '@cdktf/provider-google'

new dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts">DialogflowCxAgentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxAgentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxAgent.DialogflowCxAgentTimeouts">DialogflowCxAgentTimeouts</a>

---



