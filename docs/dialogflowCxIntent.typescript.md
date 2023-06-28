# `google_dialogflow_cx_intent`

Refer to the Terraform Registory for docs: [`google_dialogflow_cx_intent`](https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent).

# `dialogflowCxIntent` Submodule <a name="`dialogflowCxIntent` Submodule" id="@cdktf/provider-google.dialogflowCxIntent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowCxIntent <a name="DialogflowCxIntent" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent google_dialogflow_cx_intent}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.Initializer"></a>

```typescript
import { dialogflowCxIntent } from '@cdktf/provider-google'

new dialogflowCxIntent.DialogflowCxIntent(scope: Construct, id: string, config: DialogflowCxIntentConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig">DialogflowCxIntentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig">DialogflowCxIntentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.putTrainingPhrases">putTrainingPhrases</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetIsFallback">resetIsFallback</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetParent">resetParent</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetPriority">resetPriority</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetTrainingPhrases">resetTrainingPhrases</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putParameters` <a name="putParameters" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.putParameters"></a>

```typescript
public putParameters(value: IResolvable | DialogflowCxIntentParameters[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.putParameters.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParameters">DialogflowCxIntentParameters</a>[]

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.putTimeouts"></a>

```typescript
public putTimeouts(value: DialogflowCxIntentTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeouts">DialogflowCxIntentTimeouts</a>

---

##### `putTrainingPhrases` <a name="putTrainingPhrases" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.putTrainingPhrases"></a>

```typescript
public putTrainingPhrases(value: IResolvable | DialogflowCxIntentTrainingPhrases[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.putTrainingPhrases.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrases">DialogflowCxIntentTrainingPhrases</a>[]

---

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetId"></a>

```typescript
public resetId(): void
```

##### `resetIsFallback` <a name="resetIsFallback" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetIsFallback"></a>

```typescript
public resetIsFallback(): void
```

##### `resetLabels` <a name="resetLabels" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetLabels"></a>

```typescript
public resetLabels(): void
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetLanguageCode"></a>

```typescript
public resetLanguageCode(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetParent` <a name="resetParent" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetParent"></a>

```typescript
public resetParent(): void
```

##### `resetPriority` <a name="resetPriority" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetPriority"></a>

```typescript
public resetPriority(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

##### `resetTrainingPhrases` <a name="resetTrainingPhrases" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.resetTrainingPhrases"></a>

```typescript
public resetTrainingPhrases(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.isConstruct"></a>

```typescript
import { dialogflowCxIntent } from '@cdktf/provider-google'

dialogflowCxIntent.DialogflowCxIntent.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.isTerraformElement"></a>

```typescript
import { dialogflowCxIntent } from '@cdktf/provider-google'

dialogflowCxIntent.DialogflowCxIntent.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.isTerraformResource"></a>

```typescript
import { dialogflowCxIntent } from '@cdktf/provider-google'

dialogflowCxIntent.DialogflowCxIntent.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.parameters">parameters</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList">DialogflowCxIntentParametersList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference">DialogflowCxIntentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.trainingPhrases">trainingPhrases</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList">DialogflowCxIntentTrainingPhrasesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.displayNameInput">displayNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.isFallbackInput">isFallbackInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.labelsInput">labelsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.languageCodeInput">languageCodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.parametersInput">parametersInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParameters">DialogflowCxIntentParameters</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.parentInput">parentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.priorityInput">priorityInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.timeoutsInput">timeoutsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeouts">DialogflowCxIntentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.trainingPhrasesInput">trainingPhrasesInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrases">DialogflowCxIntentTrainingPhrases</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.displayName">displayName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.isFallback">isFallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.languageCode">languageCode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.parent">parent</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.priority">priority</a></code> | <code>number</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.parameters"></a>

```typescript
public readonly parameters: DialogflowCxIntentParametersList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList">DialogflowCxIntentParametersList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxIntentTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference">DialogflowCxIntentTimeoutsOutputReference</a>

---

##### `trainingPhrases`<sup>Required</sup> <a name="trainingPhrases" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.trainingPhrases"></a>

```typescript
public readonly trainingPhrases: DialogflowCxIntentTrainingPhrasesList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList">DialogflowCxIntentTrainingPhrasesList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.displayNameInput"></a>

```typescript
public readonly displayNameInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isFallbackInput`<sup>Optional</sup> <a name="isFallbackInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.isFallbackInput"></a>

```typescript
public readonly isFallbackInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.labelsInput"></a>

```typescript
public readonly labelsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.languageCodeInput"></a>

```typescript
public readonly languageCodeInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.parametersInput"></a>

```typescript
public readonly parametersInput: IResolvable | DialogflowCxIntentParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParameters">DialogflowCxIntentParameters</a>[]

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.parentInput"></a>

```typescript
public readonly parentInput: string;
```

- *Type:* string

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.priorityInput"></a>

```typescript
public readonly priorityInput: number;
```

- *Type:* number

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: IResolvable | DialogflowCxIntentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeouts">DialogflowCxIntentTimeouts</a>

---

##### `trainingPhrasesInput`<sup>Optional</sup> <a name="trainingPhrasesInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.trainingPhrasesInput"></a>

```typescript
public readonly trainingPhrasesInput: IResolvable | DialogflowCxIntentTrainingPhrases[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrases">DialogflowCxIntentTrainingPhrases</a>[]

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isFallback`<sup>Required</sup> <a name="isFallback" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.isFallback"></a>

```typescript
public readonly isFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntent.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowCxIntentConfig <a name="DialogflowCxIntentConfig" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.Initializer"></a>

```typescript
import { dialogflowCxIntent } from '@cdktf/provider-google'

const dialogflowCxIntentConfig: dialogflowCxIntent.DialogflowCxIntentConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.displayName">displayName</a></code> | <code>string</code> | The human-readable name of the intent, unique within the agent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.description">description</a></code> | <code>string</code> | Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#id DialogflowCxIntent#id}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.isFallback">isFallback</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether this is a fallback intent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.labels">labels</a></code> | <code>{[ key: string ]: string}</code> | The key/value metadata to label an intent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.languageCode">languageCode</a></code> | <code>string</code> | The language of the following fields in intent: Intent.training_phrases.parts.text If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.parameters">parameters</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParameters">DialogflowCxIntentParameters</a>[]</code> | parameters block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.parent">parent</a></code> | <code>string</code> | The agent to create an intent for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.priority">priority</a></code> | <code>number</code> | The priority of this intent. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeouts">DialogflowCxIntentTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.trainingPhrases">trainingPhrases</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrases">DialogflowCxIntentTrainingPhrases</a>[]</code> | training_phrases block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.displayName"></a>

```typescript
public readonly displayName: string;
```

- *Type:* string

The human-readable name of the intent, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#display_name DialogflowCxIntent#display_name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Human readable description for better understanding an intent like its scope, content, result etc. Maximum character limit: 140 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#description DialogflowCxIntent#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#id DialogflowCxIntent#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isFallback`<sup>Optional</sup> <a name="isFallback" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.isFallback"></a>

```typescript
public readonly isFallback: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether this is a fallback intent.

Currently only default fallback intent is allowed in the agent, which is added upon agent creation.
Adding training phrases to fallback intent is useful in the case of requests that are mistakenly matched, since training phrases assigned to fallback intents act as negative examples that triggers no-match event.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#is_fallback DialogflowCxIntent#is_fallback}

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.labels"></a>

```typescript
public readonly labels: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

The key/value metadata to label an intent.

Labels can contain lowercase letters, digits and the symbols '-' and '_'. International characters are allowed, including letters from unicase alphabets. Keys must start with a letter. Keys and values can be no longer than 63 characters and no more than 128 bytes.
Prefix "sys-" is reserved for Dialogflow defined labels. Currently allowed Dialogflow defined labels include: * sys-head * sys-contextual The above labels do not require value. "sys-head" means the intent is a head intent. "sys.contextual" means the intent is a contextual intent.
An object containing a list of "key": value pairs. Example: { "name": "wrench", "mass": "1.3kg", "count": "3" }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#labels DialogflowCxIntent#labels}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.languageCode"></a>

```typescript
public readonly languageCode: string;
```

- *Type:* string

The language of the following fields in intent: Intent.training_phrases.parts.text If not specified, the agent's default language is used. Many languages are supported. Note: languages must be enabled in the agent before they can be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#language_code DialogflowCxIntent#language_code}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.parameters"></a>

```typescript
public readonly parameters: IResolvable | DialogflowCxIntentParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParameters">DialogflowCxIntentParameters</a>[]

parameters block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#parameters DialogflowCxIntent#parameters}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.parent"></a>

```typescript
public readonly parent: string;
```

- *Type:* string

The agent to create an intent for. Format: projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#parent DialogflowCxIntent#parent}

---

##### `priority`<sup>Optional</sup> <a name="priority" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.priority"></a>

```typescript
public readonly priority: number;
```

- *Type:* number

The priority of this intent.

Higher numbers represent higher priorities.
If the supplied value is unspecified or 0, the service translates the value to 500,000, which corresponds to the Normal priority in the console.
If the supplied value is negative, the intent is ignored in runtime detect intent requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#priority DialogflowCxIntent#priority}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.timeouts"></a>

```typescript
public readonly timeouts: DialogflowCxIntentTimeouts;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeouts">DialogflowCxIntentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#timeouts DialogflowCxIntent#timeouts}

---

##### `trainingPhrases`<sup>Optional</sup> <a name="trainingPhrases" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentConfig.property.trainingPhrases"></a>

```typescript
public readonly trainingPhrases: IResolvable | DialogflowCxIntentTrainingPhrases[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrases">DialogflowCxIntentTrainingPhrases</a>[]

training_phrases block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#training_phrases DialogflowCxIntent#training_phrases}

---

### DialogflowCxIntentParameters <a name="DialogflowCxIntentParameters" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParameters"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParameters.Initializer"></a>

```typescript
import { dialogflowCxIntent } from '@cdktf/provider-google'

const dialogflowCxIntentParameters: dialogflowCxIntent.DialogflowCxIntentParameters = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParameters.property.entityType">entityType</a></code> | <code>string</code> | The entity type of the parameter. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParameters.property.id">id</a></code> | <code>string</code> | The unique identifier of the parameter. This field is used by training phrases to annotate their parts. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParameters.property.isList">isList</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the parameter represents a list of values. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParameters.property.redact">redact</a></code> | <code>boolean \| cdktf.IResolvable</code> | Indicates whether the parameter content should be redacted in log. |

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParameters.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

The entity type of the parameter.

Format: projects/-/locations/-/agents/-/entityTypes/<System Entity Type ID> for system entity types (for example, projects/-/locations/-/agents/-/entityTypes/sys.date), or projects/<Project ID>/locations/<Location ID>/agents/<Agent ID>/entityTypes/<Entity Type ID> for developer entity types.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#entity_type DialogflowCxIntent#entity_type}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParameters.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

The unique identifier of the parameter. This field is used by training phrases to annotate their parts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#id DialogflowCxIntent#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `isList`<sup>Optional</sup> <a name="isList" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParameters.property.isList"></a>

```typescript
public readonly isList: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the parameter represents a list of values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#is_list DialogflowCxIntent#is_list}

---

##### `redact`<sup>Optional</sup> <a name="redact" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParameters.property.redact"></a>

```typescript
public readonly redact: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Indicates whether the parameter content should be redacted in log.

If redaction is enabled, the parameter content will be replaced by parameter name during logging.
Note: the parameter content is subject to redaction if either parameter level redaction or entity type level redaction is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#redact DialogflowCxIntent#redact}

---

### DialogflowCxIntentTimeouts <a name="DialogflowCxIntentTimeouts" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeouts.Initializer"></a>

```typescript
import { dialogflowCxIntent } from '@cdktf/provider-google'

const dialogflowCxIntentTimeouts: dialogflowCxIntent.DialogflowCxIntentTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#create DialogflowCxIntent#create}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#delete DialogflowCxIntent#delete}. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#update DialogflowCxIntent#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#create DialogflowCxIntent#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#delete DialogflowCxIntent#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#update DialogflowCxIntent#update}.

---

### DialogflowCxIntentTrainingPhrases <a name="DialogflowCxIntentTrainingPhrases" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrases"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrases.Initializer"></a>

```typescript
import { dialogflowCxIntent } from '@cdktf/provider-google'

const dialogflowCxIntentTrainingPhrases: dialogflowCxIntent.DialogflowCxIntentTrainingPhrases = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrases.property.parts">parts</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesParts">DialogflowCxIntentTrainingPhrasesParts</a>[]</code> | parts block. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrases.property.repeatCount">repeatCount</a></code> | <code>number</code> | Indicates how many times this example was added to the intent. |

---

##### `parts`<sup>Required</sup> <a name="parts" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrases.property.parts"></a>

```typescript
public readonly parts: IResolvable | DialogflowCxIntentTrainingPhrasesParts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesParts">DialogflowCxIntentTrainingPhrasesParts</a>[]

parts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#parts DialogflowCxIntent#parts}

---

##### `repeatCount`<sup>Optional</sup> <a name="repeatCount" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrases.property.repeatCount"></a>

```typescript
public readonly repeatCount: number;
```

- *Type:* number

Indicates how many times this example was added to the intent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#repeat_count DialogflowCxIntent#repeat_count}

---

### DialogflowCxIntentTrainingPhrasesParts <a name="DialogflowCxIntentTrainingPhrasesParts" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesParts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesParts.Initializer"></a>

```typescript
import { dialogflowCxIntent } from '@cdktf/provider-google'

const dialogflowCxIntentTrainingPhrasesParts: dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesParts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesParts.property.text">text</a></code> | <code>string</code> | The text for this part. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesParts.property.parameterId">parameterId</a></code> | <code>string</code> | The parameter used to annotate this part of the training phrase. |

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesParts.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

The text for this part.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#text DialogflowCxIntent#text}

---

##### `parameterId`<sup>Optional</sup> <a name="parameterId" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesParts.property.parameterId"></a>

```typescript
public readonly parameterId: string;
```

- *Type:* string

The parameter used to annotate this part of the training phrase.

This field is required for annotated parts of the training phrase.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.71.0/docs/resources/dialogflow_cx_intent#parameter_id DialogflowCxIntent#parameter_id}

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowCxIntentParametersList <a name="DialogflowCxIntentParametersList" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.Initializer"></a>

```typescript
import { dialogflowCxIntent } from '@cdktf/provider-google'

new dialogflowCxIntent.DialogflowCxIntentParametersList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.get"></a>

```typescript
public get(index: number): DialogflowCxIntentParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParameters">DialogflowCxIntentParameters</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxIntentParameters[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParameters">DialogflowCxIntentParameters</a>[]

---


### DialogflowCxIntentParametersOutputReference <a name="DialogflowCxIntentParametersOutputReference" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.Initializer"></a>

```typescript
import { dialogflowCxIntent } from '@cdktf/provider-google'

new dialogflowCxIntent.DialogflowCxIntentParametersOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.resetIsList">resetIsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.resetRedact">resetRedact</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetIsList` <a name="resetIsList" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.resetIsList"></a>

```typescript
public resetIsList(): void
```

##### `resetRedact` <a name="resetRedact" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.resetRedact"></a>

```typescript
public resetRedact(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.entityTypeInput">entityTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.isListInput">isListInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.redactInput">redactInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.entityType">entityType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.isList">isList</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.redact">redact</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParameters">DialogflowCxIntentParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `entityTypeInput`<sup>Optional</sup> <a name="entityTypeInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.entityTypeInput"></a>

```typescript
public readonly entityTypeInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `isListInput`<sup>Optional</sup> <a name="isListInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.isListInput"></a>

```typescript
public readonly isListInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `redactInput`<sup>Optional</sup> <a name="redactInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.redactInput"></a>

```typescript
public readonly redactInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `entityType`<sup>Required</sup> <a name="entityType" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.entityType"></a>

```typescript
public readonly entityType: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `isList`<sup>Required</sup> <a name="isList" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.isList"></a>

```typescript
public readonly isList: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `redact`<sup>Required</sup> <a name="redact" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.redact"></a>

```typescript
public readonly redact: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParametersOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxIntentParameters;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentParameters">DialogflowCxIntentParameters</a>

---


### DialogflowCxIntentTimeoutsOutputReference <a name="DialogflowCxIntentTimeoutsOutputReference" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxIntent } from '@cdktf/provider-google'

new dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeouts">DialogflowCxIntentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxIntentTimeouts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTimeouts">DialogflowCxIntentTimeouts</a>

---


### DialogflowCxIntentTrainingPhrasesList <a name="DialogflowCxIntentTrainingPhrasesList" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.Initializer"></a>

```typescript
import { dialogflowCxIntent } from '@cdktf/provider-google'

new dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.get"></a>

```typescript
public get(index: number): DialogflowCxIntentTrainingPhrasesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrases">DialogflowCxIntentTrainingPhrases</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxIntentTrainingPhrases[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrases">DialogflowCxIntentTrainingPhrases</a>[]

---


### DialogflowCxIntentTrainingPhrasesOutputReference <a name="DialogflowCxIntentTrainingPhrasesOutputReference" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.Initializer"></a>

```typescript
import { dialogflowCxIntent } from '@cdktf/provider-google'

new dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.putParts">putParts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.resetRepeatCount">resetRepeatCount</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putParts` <a name="putParts" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.putParts"></a>

```typescript
public putParts(value: IResolvable | DialogflowCxIntentTrainingPhrasesParts[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.putParts.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesParts">DialogflowCxIntentTrainingPhrasesParts</a>[]

---

##### `resetRepeatCount` <a name="resetRepeatCount" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.resetRepeatCount"></a>

```typescript
public resetRepeatCount(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.property.parts">parts</a></code> | <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList">DialogflowCxIntentTrainingPhrasesPartsList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.property.partsInput">partsInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesParts">DialogflowCxIntentTrainingPhrasesParts</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.property.repeatCountInput">repeatCountInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.property.repeatCount">repeatCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrases">DialogflowCxIntentTrainingPhrases</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `parts`<sup>Required</sup> <a name="parts" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.property.parts"></a>

```typescript
public readonly parts: DialogflowCxIntentTrainingPhrasesPartsList;
```

- *Type:* <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList">DialogflowCxIntentTrainingPhrasesPartsList</a>

---

##### `partsInput`<sup>Optional</sup> <a name="partsInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.property.partsInput"></a>

```typescript
public readonly partsInput: IResolvable | DialogflowCxIntentTrainingPhrasesParts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesParts">DialogflowCxIntentTrainingPhrasesParts</a>[]

---

##### `repeatCountInput`<sup>Optional</sup> <a name="repeatCountInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.property.repeatCountInput"></a>

```typescript
public readonly repeatCountInput: number;
```

- *Type:* number

---

##### `repeatCount`<sup>Required</sup> <a name="repeatCount" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.property.repeatCount"></a>

```typescript
public readonly repeatCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxIntentTrainingPhrases;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrases">DialogflowCxIntentTrainingPhrases</a>

---


### DialogflowCxIntentTrainingPhrasesPartsList <a name="DialogflowCxIntentTrainingPhrasesPartsList" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.Initializer"></a>

```typescript
import { dialogflowCxIntent } from '@cdktf/provider-google'

new dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.get"></a>

```typescript
public get(index: number): DialogflowCxIntentTrainingPhrasesPartsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesParts">DialogflowCxIntentTrainingPhrasesParts</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxIntentTrainingPhrasesParts[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesParts">DialogflowCxIntentTrainingPhrasesParts</a>[]

---


### DialogflowCxIntentTrainingPhrasesPartsOutputReference <a name="DialogflowCxIntentTrainingPhrasesPartsOutputReference" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer"></a>

```typescript
import { dialogflowCxIntent } from '@cdktf/provider-google'

new dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.resetParameterId">resetParameterId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetParameterId` <a name="resetParameterId" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.resetParameterId"></a>

```typescript
public resetParameterId(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.property.parameterIdInput">parameterIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.property.textInput">textInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.property.parameterId">parameterId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.property.text">text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesParts">DialogflowCxIntentTrainingPhrasesParts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `parameterIdInput`<sup>Optional</sup> <a name="parameterIdInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.property.parameterIdInput"></a>

```typescript
public readonly parameterIdInput: string;
```

- *Type:* string

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.property.textInput"></a>

```typescript
public readonly textInput: string;
```

- *Type:* string

---

##### `parameterId`<sup>Required</sup> <a name="parameterId" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.property.parameterId"></a>

```typescript
public readonly parameterId: string;
```

- *Type:* string

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.property.text"></a>

```typescript
public readonly text: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesPartsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DialogflowCxIntentTrainingPhrasesParts;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-google.dialogflowCxIntent.DialogflowCxIntentTrainingPhrasesParts">DialogflowCxIntentTrainingPhrasesParts</a>

---



