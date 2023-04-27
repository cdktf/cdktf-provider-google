# `google_kms_secret_ciphertext`

Refer to the Terraform Registory for docs: [`google_kms_secret_ciphertext`](https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/kms_secret_ciphertext).

# `kmsSecretCiphertext` Submodule <a name="`kmsSecretCiphertext` Submodule" id="@cdktf/provider-google.kmsSecretCiphertext"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### KmsSecretCiphertext <a name="KmsSecretCiphertext" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/kms_secret_ciphertext google_kms_secret_ciphertext}.

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.kms_secret_ciphertext.KmsSecretCiphertext;

KmsSecretCiphertext.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cryptoKey(java.lang.String)
    .plaintext(java.lang.String)
//  .additionalAuthenticatedData(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(KmsSecretCiphertextTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.cryptoKey">cryptoKey</a></code> | <code>java.lang.String</code> | The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.plaintext">plaintext</a></code> | <code>java.lang.String</code> | The plaintext to be encrypted. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.additionalAuthenticatedData">additionalAuthenticatedData</a></code> | <code>java.lang.String</code> | The additional authenticated data used for integrity checks during encryption and decryption. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/kms_secret_ciphertext#id KmsSecretCiphertext#id}. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.cryptoKey"></a>

- *Type:* java.lang.String

The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/kms_secret_ciphertext#crypto_key KmsSecretCiphertext#crypto_key}

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.plaintext"></a>

- *Type:* java.lang.String

The plaintext to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/kms_secret_ciphertext#plaintext KmsSecretCiphertext#plaintext}

---

##### `additionalAuthenticatedData`<sup>Optional</sup> <a name="additionalAuthenticatedData" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.additionalAuthenticatedData"></a>

- *Type:* java.lang.String

The additional authenticated data used for integrity checks during encryption and decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/kms_secret_ciphertext#additional_authenticated_data KmsSecretCiphertext#additional_authenticated_data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/kms_secret_ciphertext#id KmsSecretCiphertext#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/kms_secret_ciphertext#timeouts KmsSecretCiphertext#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetAdditionalAuthenticatedData">resetAdditionalAuthenticatedData</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.putTimeouts"></a>

```java
public void putTimeouts(KmsSecretCiphertextTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a>

---

##### `resetAdditionalAuthenticatedData` <a name="resetAdditionalAuthenticatedData" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetAdditionalAuthenticatedData"></a>

```java
public void resetAdditionalAuthenticatedData()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetId"></a>

```java
public void resetId()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.google.kms_secret_ciphertext.KmsSecretCiphertext;

KmsSecretCiphertext.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.google.kms_secret_ciphertext.KmsSecretCiphertext;

KmsSecretCiphertext.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.google.kms_secret_ciphertext.KmsSecretCiphertext;

KmsSecretCiphertext.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.ciphertext">ciphertext</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference">KmsSecretCiphertextTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.additionalAuthenticatedDataInput">additionalAuthenticatedDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.cryptoKeyInput">cryptoKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.plaintextInput">plaintextInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.additionalAuthenticatedData">additionalAuthenticatedData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.cryptoKey">cryptoKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `ciphertext`<sup>Required</sup> <a name="ciphertext" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.ciphertext"></a>

```java
public java.lang.String getCiphertext();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.timeouts"></a>

```java
public KmsSecretCiphertextTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference">KmsSecretCiphertextTimeoutsOutputReference</a>

---

##### `additionalAuthenticatedDataInput`<sup>Optional</sup> <a name="additionalAuthenticatedDataInput" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.additionalAuthenticatedDataInput"></a>

```java
public java.lang.String getAdditionalAuthenticatedDataInput();
```

- *Type:* java.lang.String

---

##### `cryptoKeyInput`<sup>Optional</sup> <a name="cryptoKeyInput" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.cryptoKeyInput"></a>

```java
public java.lang.String getCryptoKeyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `plaintextInput`<sup>Optional</sup> <a name="plaintextInput" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.plaintextInput"></a>

```java
public java.lang.String getPlaintextInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* <a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---

##### `additionalAuthenticatedData`<sup>Required</sup> <a name="additionalAuthenticatedData" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.additionalAuthenticatedData"></a>

```java
public java.lang.String getAdditionalAuthenticatedData();
```

- *Type:* java.lang.String

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.cryptoKey"></a>

```java
public java.lang.String getCryptoKey();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertext.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### KmsSecretCiphertextConfig <a name="KmsSecretCiphertextConfig" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.kms_secret_ciphertext.KmsSecretCiphertextConfig;

KmsSecretCiphertextConfig.builder()
//  .connection(SSHProvisionerConnection)
//  .connection(WinrmProvisionerConnection)
//  .count(java.lang.Number)
//  .count(TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner)
//  .provisioners(LocalExecProvisioner)
//  .provisioners(RemoteExecProvisioner>)
    .cryptoKey(java.lang.String)
    .plaintext(java.lang.String)
//  .additionalAuthenticatedData(java.lang.String)
//  .id(java.lang.String)
//  .timeouts(KmsSecretCiphertextTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.cryptoKey">cryptoKey</a></code> | <code>java.lang.String</code> | The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.plaintext">plaintext</a></code> | <code>java.lang.String</code> | The plaintext to be encrypted. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.additionalAuthenticatedData">additionalAuthenticatedData</a></code> | <code>java.lang.String</code> | The additional authenticated data used for integrity checks during encryption and decryption. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/kms_secret_ciphertext#id KmsSecretCiphertext#id}. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `cryptoKey`<sup>Required</sup> <a name="cryptoKey" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.cryptoKey"></a>

```java
public java.lang.String getCryptoKey();
```

- *Type:* java.lang.String

The full name of the CryptoKey that will be used to encrypt the provided plaintext. Format: ''projects/{{project}}/locations/{{location}}/keyRings/{{keyRing}}/cryptoKeys/{{cryptoKey}}''.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/kms_secret_ciphertext#crypto_key KmsSecretCiphertext#crypto_key}

---

##### `plaintext`<sup>Required</sup> <a name="plaintext" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.plaintext"></a>

```java
public java.lang.String getPlaintext();
```

- *Type:* java.lang.String

The plaintext to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/kms_secret_ciphertext#plaintext KmsSecretCiphertext#plaintext}

---

##### `additionalAuthenticatedData`<sup>Optional</sup> <a name="additionalAuthenticatedData" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.additionalAuthenticatedData"></a>

```java
public java.lang.String getAdditionalAuthenticatedData();
```

- *Type:* java.lang.String

The additional authenticated data used for integrity checks during encryption and decryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/kms_secret_ciphertext#additional_authenticated_data KmsSecretCiphertext#additional_authenticated_data}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/kms_secret_ciphertext#id KmsSecretCiphertext#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextConfig.property.timeouts"></a>

```java
public KmsSecretCiphertextTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/kms_secret_ciphertext#timeouts KmsSecretCiphertext#timeouts}

---

### KmsSecretCiphertextTimeouts <a name="KmsSecretCiphertextTimeouts" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.kms_secret_ciphertext.KmsSecretCiphertextTimeouts;

KmsSecretCiphertextTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/kms_secret_ciphertext#create KmsSecretCiphertext#create}. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/kms_secret_ciphertext#delete KmsSecretCiphertext#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/kms_secret_ciphertext#create KmsSecretCiphertext#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/4.63.1/docs/resources/kms_secret_ciphertext#delete KmsSecretCiphertext#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### KmsSecretCiphertextTimeoutsOutputReference <a name="KmsSecretCiphertextTimeoutsOutputReference" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.google.kms_secret_ciphertext.KmsSecretCiphertextTimeoutsOutputReference;

new KmsSecretCiphertextTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a> OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-google.kmsSecretCiphertext.KmsSecretCiphertextTimeouts">KmsSecretCiphertextTimeouts</a> OR com.hashicorp.cdktf.IResolvable

---



